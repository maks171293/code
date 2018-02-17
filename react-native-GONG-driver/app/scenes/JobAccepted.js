import  React, {Component} from 'react';
import  LayoutStyle from  '../styles/Layout'
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
    Animated,
    AsyncStorage,
    Platform,
    Linking
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import * as actionsJob from '../constants/actionsJob'
import Svg, {RadialGradient, Defs, Stop, Rect, Circle, Path} from 'react-native-svg';
import API from '../services/api';
import PopupDialog from 'react-native-popup-dialog';
import LocationInput from  '../components/services/LocationInput';
import Icon from '../assets/svg/svg';
import CarsLogo from '../assets/fonts/svg';

//translations
import {strings} from '../utilits/localStrings.js';

const inputsHeight = 65;
//const Permissions = require('react-native-permissions');
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.011527469804754276;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DELTS = {
    latitude: 0.011527469804754276,
    longitude: LATITUDE_DELTA * ASPECT_RATIO
};
let currentPosition = 'unknown';
const GOOGLE_API_KEY = 'AIzaSyCvmHIDCBdcW826SWpbMidBfr_LbCFnstI';
const GOOGLE_API_KEY_SPARE = 'AIzaSyBI5w7aJpDPMUOR2h-edcQRlM9qawCuv44';
class JobAccepted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '0',
            customerToSearchString: '0',
            customerSearchString: '0',
            visible: true,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            regionDestination: this.props.job,
            delts: {
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            showSearchBlock: false,
            showCustomerToSearchBlock: false,
            showCustomerSearchBlock: false,
            styleCoordinates: {
                alignItems: 'center',
                position: 'absolute',
                flexDirection: 'row',
                paddingHorizontal: 18,
                height: 280,
                top: 80,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
            },
            timeToArrive: '',
            addressCheck: 1,
            allPoints: [],
            mapHeight: 400,
            distance: 0,
            job: this.props.job.job,
        };
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.setCurrentGeolocation = this.setCurrentGeolocation.bind(this);
        this.buildRoute = this.buildRoute.bind(this);
        this.getTimeToArrive = this.getTimeToArrive.bind(this);
        this.doCentered = this.doCentered.bind(this);
        this.updateMap = this.updateMap.bind(this);
        this.doGeocodeCustomerToPosition = this.doGeocodeCustomerToPosition.bind(this);
        this.doGeocodeCustomerPosition = this.doGeocodeCustomerPosition.bind(this);

        // setTimeout(() => {
        //     navigator.geolocation.getCurrentPosition(
        //         (position) => {
        //           console.log('position', position);
        //             currentPosition = {
        //                 latitude: position.coords.latitude,
        //                 longitude: position.coords.longitude,
        //                 latitudeDelta: LATITUDE_DELTA,
        //                 longitudeDelta: LONGITUDE_DELTA,
        //             };
        //
        //             this.onRegionChangeManual(currentPosition);
        //         },
        //         (error) => alert(JSON.stringify(error)), {
        //             enableHighAccuracy: false,
        //             timeout: 9000000,
        //             maximumAge: 1000
        //         }
        //     );
        // }, 0);
    }

    componentWillMount() {
        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    currentPosition = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };
                    this.setState({
                      driverCurrentPosition: currentPosition
                    })
                    this.onRegionChangeManual(currentPosition);
                    // this.buildRoute();
                    // this.getTimeToArrive();
                },
                (error) => alert(JSON.stringify(error)), {
                    enableHighAccuracy: false,
                    timeout: 2000000,
                    maximumAge: 1000
                }
            );
        }, 0);

        // this.buildRoute()
    }

    onRegionChangeManual(region) {
        this.setState({region});
        this.regionToStorage(region);
    }

    updateMap() {
        this.mapRef.fitToSuppliedMarkers(['driver', 'customer'], true);
    }

    doGeocodePosition(coordinates, region) {
        Geocoder.geocodePosition(coordinates).then(res => {
            // res is an Array of geocoding object (see below)
            let searchString = res[0].formattedAddress;
            this.setState({searchString, region: region, showSearchBlock: true});
        }).catch(err => console.log('error',err))
    }

    doGeocodeCustomerToPosition(coords){
      if(!coords){
        return;
      }
      let coordinates = {
        lat: +coords.split(',')[0],
        lng: +coords.split(',')[1]
      }
      Geocoder.geocodePosition(coordinates).then(res => {
          // res is an Array of geocoding object (see below)
          let customerToSearchString = res[0].formattedAddress;
          this.setState({customerToSearchString, showCustomerToSearchBlock: true});
      }).catch(err => console.log('error',err))
    }

    doGeocodeCustomerPosition(coords){
      if(!coords){
        return;
      }
      let coordinates = {
        lat: +coords.split(',')[0],
        lng: +coords.split(',')[1]
      }
      Geocoder.geocodePosition(coordinates).then(res => {
          // res is an Array of geocoding object (see below)
          let customerSearchString = res[0].formattedAddress;
          this.setState({customerSearchString, showCustomerSearchBlock: true});
      }).catch(err => console.log('error',err))
    }

    onRegionChangeComplete(newRegion) {
        DELTS.latitude = newRegion.latitudeDelta;
        DELTS.longitude = newRegion.longitudeDelta;
    }

    regionToStorage(region) {
        let coordinates = {
            lat: region.latitude,
            lng: region.longitude
        };
        this.doGeocodePosition(coordinates, region);
        this.doGeocodeCustomerToPosition(this.state.job.customer_address_to);
        this.doGeocodeCustomerPosition(this.state.job.customer_addres_from);
    }

    setCurrentGeolocation() {
        this.onRegionChangeManual(currentPosition);
    }

    getTimeToArrive() {
        let pointA = this.state.driverCurrentPosition;
        //paste address of customer
        let pointB = {
            latitude: +(this.state.driverCurrentPosition.latitude + 0.01),
            longitude: +(this.state.driverCurrentPosition.longitude + 0.01)
        };
        fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + pointA.latitude + "," + pointA.longitude + "&destination=" + pointB.latitude + "," + pointB.longitude + "&key=" + GOOGLE_API_KEY, {method: "GET"})
            .then((response) => response.json())
            .then((responseData) => {
                if (!responseData.routes.length) {
                    // If there are no available routes
                    // this.updateMap();
                    this.setState({timeToArrive: '--'});
                    return;
                }
                //console.log(responseData.routes[0].legs[0]);
                if (responseData.routes[0].legs[0].distance.value <= 1000) {
                    this.refreshDriver();
                }

                if (this.state.timeToArrive === '') {
                    // console.log('update map');
                    // this.doCentered(responseData.routes[0].bounds, this.state.mapHeight);
                    this.updateMap()
                }
                this.setState({timeToArrive: responseData.routes[0].legs[0].duration.value});
            })
            .done();
    }

    doCentered(bounds, mapHeight) {
       let minY = bounds.southwest.lat,
           maxY = bounds.northeast.lat,
           minX = bounds.southwest.lng,
           maxX = bounds.northeast.lng,
           midY = (minY + maxY) / 2,
           midX = (minX + maxX) / 2,
           deltaY = (maxY - minY),
           deltaX = (maxX - minX);

       let coef = inputsHeight/(mapHeight - inputsHeight);
       let inputsHeightInCoords = coef*deltaY*2;


       let newDeltaY = (deltaY + inputsHeightInCoords) * 1.1;
       let newDeltaX = deltaX;

       let newRegion = {
           latitude: midY,
           longitude: midX,
           latitudeDelta: newDeltaY,
           longitudeDelta: newDeltaX,
       };
       // console.log(newRegion);
       this.setState({
           region: newRegion
       });
   }

    buildRoute() {
      //paste address of customer
        let address = {
          latitude: this.state.driverCurrentPosition.latitude,
          longitude: this.state.driverCurrentPosition.longitude
        }
        let pointB;

        if (address) {
            pointB = {
                latitude: +(address.latitude + 0.01),
                longitude: +(address.longitude + 0.01)
            };

        } else if (this.props.job.job.searchString) {
            pointB = {
                latitude: 45.458626,
                longitude: 9.181872999999996
            }
        }  else {
            return;
        }

        // console.log('pointBBBBB',pointB);

        // this.setState({towCoordinates: pointB});

        let pointA = {
          latitude: this.state.driverCurrentPosition.latitude,
          longitude: this.state.driverCurrentPosition.longitude
        };
        console.log('fetch done');
        fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + pointA.latitude + "," + pointA.longitude + "&destination=" + pointB.latitude + "," + pointB.longitude + "&key=" + GOOGLE_API_KEY, {method: "GET"})
            .then((response) => response.json())
            .then((responseData) => {
                // console.log('resp------------', responseData);
                if (responseData.status == "OK") {
                    console.log('google', responseData);
                    //this.doCentered(responseData.routes[0].bounds);
                    let pol = responseData.routes[0].overview_polyline.points;
                    // let distance = responseData.routes[0].legs[0].distance.value;
                    this.decodePolyline(pol);
                } else {
                    this.setState({
                        // destinationCheck: false,
                        allPoints: [],
                        // regionDestination: 0,
                        // searchString: '',
                        // distance: null,
                    });
                    alert(strings['Incorrect destination'])
                }
            })
            .done();
    }
    decodePolyline(encoded) {
        if (!encoded) {
            return [];
        }
        var poly = [];
        var index = 0, len = encoded.length;
        var lat = 0, lng = 0;

        while (index < len) {
            var b, shift = 0, result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlat = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lat += dlat;

            shift = 0;
            result = 0;

            do {
                b = encoded.charCodeAt(index++) - 63;
                result = result | ((b & 0x1f) << shift);
                shift += 5;
            } while (b >= 0x20);

            var dlng = (result & 1) != 0 ? ~(result >> 1) : (result >> 1);
            lng += dlng;

            var p = {
                latitude: lat / 1e5,
                longitude: lng / 1e5,
            };
            poly.push(p);
        }

        this.setState({allPoints: poly});
        setTimeout(()=>console.log('points', this.state.allPoints), 1000);
        // return poly;
    }


    jobDone() {
        // release mod
        // let data = {
        //     driver_id : this.props.user.driver_id,
        //      job_id: this.state.job.job_id
        // };

        // test mod
        let data = {
            driver_id: 1,
            job_id: this.state.job.job_id
        };
        API.jobDone({data}, function (result) {
          this.props.newJob(false);
          Actions['driverGeolocation']();
        }.bind(this));
    }

    render() {
        return (
            <View style={[LayoutStyle.contentContainer, LayoutStyle.scrollViewContentContainer]}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    height: 75,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.70)'
                }}/>
                <View
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  left: 0,
                  zIndex: 1
                }}>
                    <View style={LayoutStyle.demandView}>
                      <LocationInput
                        text={this.state.customerSearchString}
                        style={{height: 25}}/>
                            {this.state.showCustomerToSearchBlock &&
                                <LocationInput
                                    style={{height: 25, marginVertical: 5}}
                                    text={this.state.customerToSearchString}
                                    type2={true}
                                />
                            }
                    </View>
                </View>
                {
                  <View style={{flex: 1}}>
                  <MapView
                     ref={(ref)=>{this.mapRef = ref}}
                     style={styles.map}
                     showsMyLocationButton={true}
                     resizeMode={'cover'}
                     region={this.state.region}
                     onRegionChangeComplete={this.onRegionChangeComplete}
                     provider={PROVIDER_GOOGLE}
                     onLayout={(event) => {
                            this.setState({mapHeight: event.nativeEvent.layout.height});
                            this.mapRef.fitToSuppliedMarkers(['driver', 'customer'], true)
                        }}
                     >
                    <MapView.Marker
                        ref={(markerDriverPos)=>this.markerDriverPos = markerDriverPos}
                        identifier="driver"
                        title="Your position"
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                        }}
                        image={require('../assets/images/pin_first.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />

{
                    <MapView.Marker
                        ref={(markerCustomer)=>this.markerCustomer = markerCustomer}
                        identifier="customerFrom"
                        title="Customer position"
                        coordinate={{
                            latitude: +this.state.job.customer_addres_from.split(',')[0],
                            longitude: +this.state.job.customer_addres_from.split(',')[1],
                        }}
                        pinColor="red"
                        style={styles.marker}
                    />
}

{
                    this.state.job.customer_address_to ?
                    <MapView.Marker
                    ref={(markerDestination) => { this.markerDestination = markerDestination; }}
                    identifier="customerTo"
                    coordinate={{
                      latitude: +this.state.job.customer_address_to.split(',')[0],
                      longitude: +this.state.job.customer_address_to.split(',')[1],
                    }}
                    style={styles.marker}
                    pinColor="green"
                    title="Customer to "
                    >

                    <MapView.Callout tooltip style={styles.calloutContainer}>
                                {Platform.select({'android'://Shadow simulation for android
                                    <View
                                        style={{borderRadius: 10, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
                                        <Svg style={{flex: 1}}>
                                            <Defs>
                                                <RadialGradient id="grad" cx="50%" cy="50%" rx="50%" ry="50%">
                                                    <Stop
                                                        offset="30%"
                                                        stopColor="#000"
                                                        stopOpacity="1"
                                                    />
                                                    <Stop
                                                        offset="100%"
                                                        stopColor="#fff"
                                                        stopOpacity="0"
                                                    />
                                                </RadialGradient>
                                            </Defs>
                                            <Rect
                                                x="0"
                                                y="0"
                                                width="100%"
                                                height="100%"
                                                fill="url(#grad)"
                                            />
                                        </Svg>
                                    </View>
                                })}
                                <View style={styles.callout}>
                                    <Text style={styles.text}>
                                        {this.state.distance < 1 ? '<1' : this.props.distance}
                                        <Text style={{fontSize: 14}}> km</Text>
                                    </Text>
                                </View>
                            </MapView.Callout>
                    </MapView.Marker>
                    : <View/>
                  }
                    <MapView.Polyline
                      coordinates={this.state.allPoints}
                      strokeColor="rgba(0,0,200,0.5)"
                      strokeWidth={3}
                      />
                </MapView>
                </View>
              }
              <View>

                    {(Platform.OS == 'ios' || !this.state.isDriverArrived) ?
                        <View style={[LayoutStyle.waitingDriverDiagram, {zIndex: 10}]}>
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 10
                            }}>
                                <Icon name="timer" style={{width: 80, height: 80, zIndex: 10}}/>
                            </View>
                            <Text style={{fontSize: 20, backgroundColor: 'transparent', zIndex: 11}}>
                                {isNaN(this.state.timeToArrive/60) ?
                                    this.state.timeToArrive
                                :
                                    (this.state.timeToArrive/60).toFixed()
                                }
                            </Text>
                            <Text style={{fontSize: 16, backgroundColor: 'transparent', zIndex: 11}}>{strings["min"]}</Text>
                        </View>
                    :
                        <View/>
                    }

                    <View style={[LayoutStyle.listItem, styles.listItem]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={LayoutStyle.listItemIconWrapper}>
                                <CarsLogo car={this.state.job.vehicle}/>
                                {
                                  // <Icon name='car'/>
                                }
                            </View>
                            <Text style={styles.listItemText}>
                                {this.state.job.vehicle_license_plate}
                            </Text>
                        </View>
                        <Text style={styles.listItemText}>
                            {/*this.props.job.confirmedDriver.first_name*/}
                            {this.state.job.customer_name}
                        </Text>
                    </View>

                </View>
                <View style={{

                }}>
                <TouchableOpacity
                    style={{
                        width: width-20,
                        marginLeft: 10,
                        borderColor: '#d42127',
                        backgroundColor: '#d42127',
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                        borderRadius: 5,
                        borderWidth: 0.7,
                        alignItems: 'center',
                        zIndex: 11,
                        bottom: 20,
                        marginTop: 40
                    }}
                    onPress={ () => this.jobDone()}>
                    <Text style={LayoutStyle.newDemandContinue, {color: 'white'}}>{strings["Done"]}</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        footer: state.footer,
        job: state.job,
        user: state.user
    }),
    dispatch => ({
      newJob: (job) => {
        dispatch({
          type: actionsJob.CHANGE_NEW_JOB,
          job: job
        })
      }
    })
)(JobAccepted);

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        flex: 1,
        marginBottom: -25
    },
    coordinates: {
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 18,
        height: 265,
        top: 61,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    searchString: {},
    marker: {
        position: 'absolute',
        top: 40
    },
    button: {
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        zIndex: 12,
        bottom: 50,
    },
    buttonEditDetailsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        bottom: 110,
    },
    continueBtn: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '600',
    },
    bubble: {
        borderColor: 'gray',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 0.7,
    },
    listItemText: {
        paddingRight: 20,
        fontSize: 16,
        color: '#424242',
    },
    listItem: {
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        backgroundColor: '#fff'
    },
    calloutContainer: {
        top: 0,
        // width: 75,
        // ...Platform.select({'android': { //Shadow simulation for android
            width: 95,
            paddingHorizontal: 15,
            paddingVertical: 15,
        // }}),
    },
    callout: {
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .5,
    },
    text: {
        borderRadius: 10,
        fontSize: 18,
        color:'#4bb44f',
        fontWeight: '500',
    },
});
