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
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

//translations
import {strings} from '../utilits/localStrings.js';

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

class JobAccepted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '0',
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
            addressCheck: 1,
            job: this.props.job.job,
        };
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.setCurrentGeolocation = this.setCurrentGeolocation.bind(this);

        console.log(this.props, 'props');

        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                  console.log('position', position);
                    currentPosition = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    };

                    this.onRegionChangeManual(currentPosition);
                },
                (error) => alert(JSON.stringify(error)), {
                    enableHighAccuracy: false,
                    timeout: 9000000,
                    maximumAge: 1000
                }
            );
        }, 0);
    }

    // componentWillMount() {
    //     setTimeout(() => {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 currentPosition = {
    //                     latitude: position.coords.latitude,
    //                     longitude: position.coords.longitude,
    //                     latitudeDelta: LATITUDE_DELTA,
    //                     longitudeDelta: LONGITUDE_DELTA,
    //                 };
    //
    //                 this.onRegionChangeManual(currentPosition);
    //             },
    //             (error) => alert(JSON.stringify(error)), {
    //                 enableHighAccuracy: false,
    //                 timeout: 2000000,
    //                 maximumAge: 1000
    //             }
    //         );
    //     }, 0);
    // }

    onRegionChangeManual(region) {
      console.log('region', region);
        this.setState({region});
        this.regionToStorage(region);
    }

    doGeocodePosition(coordinates, region) {
      console.log('geocode', region);
      console.log('Geocoder', Geocoder);
        Geocoder.geocodePosition(coordinates).then(res => {
            // res is an Array of geocoding object (see below)
            let searchString = res[0].formattedAddress;
            this.setState({searchString, region: region, showSearchBlock: true});
        }).catch(err => console.log(err))
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
        console.log('coordinates', coordinates);
        this.doGeocodePosition(coordinates, region);
    }

    setCurrentGeolocation() {
        this.onRegionChangeManual(currentPosition);
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

        }.bind(this));
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex, {backgroundColor: 'white', marginTop: 50}]}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    height: 75,
                    width: width,
                    zIndex: 11,
                    backgroundColor: 'rgba(255, 255, 255, 0.70)'
                }}/>
                <View style={{position: 'absolute', top: 18, zIndex: 11, marginLeft: (width - 340) / 2}}>
                    <View style={LayoutStyle.demandView}>

                        <TextInput
                            style={[LayoutStyle.textInput, LayoutStyle.demandInput]}
                            value={this.state.searchString}
                        />
                        <Image source={require('../assets/images/mark_loc.png')}
                               resizeMode={'stretch'}
                               style={[LayoutStyle.pointInput, {left: 13, top: 12}]}/>
                        {
                            this.state.addressCheck != 0 ?
                                <Image source={require('../assets/images/check.png')}
                                       resizeMode={'stretch'}
                                       style={LayoutStyle.demandCheck}/>
                                : null
                        }
                    </View>
                </View>
                {
                  <MapView style={styles.map}
                         showsMyLocationButton={true}
                         resizeMode={'cover'}
                        //  region={this.state.region}
                         onRegionChangeComplete={this.onRegionChangeComplete}>

                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                        }}
                        image={require('../assets/images/pin_first.png')}
                        style={{
                            width: 40,
                            height: 40,
                        }}
                    />

                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.region.latitude + 0.01,
                            longitude: this.state.region.longitude + 0.01,
                        }}
                        style={styles.marker}
                        pinColor="green"
                    />
                </MapView>
              }
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
                        position: 'absolute',
                        zIndex: 11,
                        bottom: 20
                    }}
                    onPress={ () => this.jobDone()}>
                    <Text style={LayoutStyle.newDemandContinue}>{strings["Done"]}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(
    state => ({
        footer: state.footer,
        job: state.job,
        user: state.user
    })
)(JobAccepted);

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10,
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
});
