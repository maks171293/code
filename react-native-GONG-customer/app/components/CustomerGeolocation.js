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
    Linking
} from 'react-native';

import Storage from 'react-native-storage';
import MapView from 'react-native-maps';
import AutoComplete from './AutoComplete';
import Geocoder from 'react-native-geocoder';
import {Actions} from 'react-native-router-flux';
import Loader from './Loader'
const Permissions = require('react-native-permissions');
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.011527469804754276;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DELTS = {
    latitude: 0.011527469804754276,
    longitude: LATITUDE_DELTA * ASPECT_RATIO
};

export default  class customerGeolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            searchString: 0,
            visible: true,
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
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
                height: 265,
                top: 67,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
            },
            addressCheck: 1
        };


        this.storage = new Storage({
            size: 10000,
            storageBackend: AsyncStorage,
            defaultExpires: 20000 * 3600 * 24,
            enableCache: true,
        });

        this.autoCompleteChange = this.autoCompleteChange.bind(this);
        this.onRegionChangeManual = this.onRegionChangeManual.bind(this);
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.addressCheck = this.addressCheck.bind(this);
        this.focusSearchOut = this.focusSearchOut.bind(this);
        this._setCurrentGeolocation = this._setCurrentGeolocation.bind(this);
    }

    watchID = null;

    componentDidMount() {

        let timeoutLoader = typeof this.props.loader != 'undefined' ? 0 : 6000;

        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, timeoutLoader);

        setTimeout(() => {
            Actions.refresh(customerGeolocation)

            Permissions.requestPermission('location')
                .then(response => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            let initialPosition = JSON.stringify(position);
                            let currentPosition = {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            };
                            this.onRegionChangeManual(currentPosition);
                            this.regionToStorage(currentPosition);
                        },
                        (error) => alert(JSON.stringify(error)),

                        {enableHighAccuracy: false, timeout: 2000000, maximumAge: 1000}
                    );
                    this.watchID = navigator.geolocation.watchPosition((position) => {
                        var lastPosition = JSON.stringify(position);
                        this.setState({lastPosition,});
                    });
                }, (response) => {
                    // alert("Not Granted!");
                });
        }, 0);
    }

    // componentWillUnmount() {
    //     navigator.geolocation.clearWatch(this.watchID);
    // }

    onRegionChangeManual(region) {
        this.setState({region});
        this.regionToStorage(region);
    }

    addressCheck() {
        this.setState({addressCheck: 1});
    }

    autoCompleteChange(location, address) {
        let region = {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };
        this.setState({
            region: region,
            searchString: address,
        });
        this.regionToStorage(region);
    }

    manualPress(name) {
        let region = {
            latitude: name.nativeEvent.coordinate.latitude,
            longitude: name.nativeEvent.coordinate.longitude,
            latitudeDelta: DELTS.latitude,
            longitudeDelta: DELTS.longitude,
        };
        let coordinates = {
            lat: region.latitude,
            lng: region.longitude
        };

        this.doGeocodePosition(coordinates, region);
        this.setState({region});
    }

    doGeocodePosition(coordinates, region) {

        Geocoder.geocodePosition(coordinates).then(res => {
            // res is an Array of geocoding object (see below)
            let searchString = res[0].formattedAddress;
            this.setState({searchString, showSearchBlock: true}, ()=> {

                this.storage.save({
                    key: 'region',
                    rawData: {
                        region: region,
                        geocode: searchString,
                    },
                    expires: 100000 * 3600 * 24
                });
            });
        })
            .catch(err => console.log(err))
    }

    onRegionChangeComplete(newRegion) {
        DELTS.latitude = newRegion.latitudeDelta;
        DELTS.longitude = newRegion.longitudeDelta;
    }

    focusSearchIn() {
        let styleCoordinates = {
            ...this.state.styleCoordinates,
            zIndex: 18,
            height: 240,
        };
        this.setState({styleCoordinates});
    }

    focusSearchOut() {
        let styleCoordinates = {
            ...this.state.styleCoordinates,
            zIndex: 9,
            height: 40,
        };
        this.setState({styleCoordinates});
    }

    regionToStorage(region) {

        let coordinates = {
            lat: region.latitude,
            lng: region.longitude
        };

        this.doGeocodePosition(coordinates, region);
        this.storage.load({
            key: 'region',
        }).then(ret => {
            console.log(ret, 'yyyyy')
            let region = ret.region;
        }).catch(err => {
            console.warn(err);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    break;
                case 'ExpiredError':
                    // TODO
                    break;
            }
        });
    }


    _setCurrentGeolocation() {
        Permissions.requestPermission('location')
            .then(response => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        let initialPosition = JSON.stringify(position);
                        let currentPosition = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        };
                        this.onRegionChangeManual(currentPosition);
                        this.regionToStorage(currentPosition);
                    },
                    (error) => alert(JSON.stringify(error)),

                    {enableHighAccuracy: false, timeout: 2000000, maximumAge: 1000}
                );
                this.watchID = navigator.geolocation.watchPosition((position) => {
                    var lastPosition = JSON.stringify(position);
                    this.setState({lastPosition,});
                });
            }, (response) => {
                // alert("Not Granted!");
            });
    }

    render() {
        if (this.state.visible && this.props.loader != 0) {
            return <Loader visible={this.state.visible}/>;
        }
        return (
            <View style={styles.container}>

                <View
                    style={[this.state.styleCoordinates]}
                    onFocus={()=> {
                        this.focusSearchIn();
                    }}
                    onBlur={()=> {
                        this.focusSearchOut();
                    }}
                    ref="searchBlock"
                    onChange={()=> {
                        this.setState({addressCheck: 0});
                    }}>
                    <AutoComplete
                        autoCompleteChange={this.autoCompleteChange}
                        addressCheck={this.addressCheck}
                        text={this.state.searchString}
                        isAddressCheck={this.state.addressCheck}
                        ref="autoComplete"
                    />
                    <Image source={require('../assets/images/position.png')} resizeMode={'stretch'} style={{
                        width: 17,
                        height: 22,
                        position: 'absolute',
                        left: 40,
                        top: 8,
                        zIndex: 30
                    }}/>
                    {this.state.addressCheck ?
                        <Image source={require('../assets/images/check.png')} resizeMode={'stretch'} style={{
                            width: 20,
                            height: 15,
                            flex: 1,
                            position: 'absolute',
                            right: 35,
                            top: 12,
                            zIndex: 30,
                        }}/>
                        : null
                    }
                </View>

                <MapView style={styles.map}
                         showsMyLocationButton={true}
                         resizeMode={'cover'}
                         onPress={()=> {
                             console.log(this.refs.autoComplete)
                         }}
                         region={this.state.region}
                         onLongPress={(name) => this.manualPress(name)}
                         onRegionChangeComplete={this.onRegionChangeComplete}>


                    <MapView.Marker
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                        }}
                        anchor={{
                            x: 0.5,
                            y: 0.5,
                        }}
                        style={styles.marker}
                        image={require('../assets/images/marker.png')}
                    />


                </MapView>
                <TouchableOpacity
                    resizeMode={'contain'}
                    style={{
                    width: 30,
                    zIndex: 12,
                    height: 30,
                    position: 'absolute',
                    right: 20,
                    top: 130,

                }}
                onPress={this._setCurrentGeolocation}>
                    <Image source={require('../assets/images/my_location.png')}
                           resizeMode={'contain'}
                           style={{

                               width: 30,

                               height: 30,


                           }}/>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        /*backgroundColor: 'rgba(191, 191, 191, 0.7)',*/
    },
    border: {

        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6',
        zIndex: 21,
        // borderBottomWidth: 0.75,
        width: width,
        borderColor: 'gray',
        top: -height * 0.61,

    },
    map: {
        position: 'absolute',

        top: height * 0.2,
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
    continue: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    bubble: {
        width: 150,
        // backgroundColor: 'rgba(255,255,255,0.7)',
        borderColor: 'white',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 0.7,
    },
    button: {
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        zIndex: 12
    },
    addressContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        width: width,
        height: 75,
        paddingHorizontal: 20,
        zIndex: 12
    },
    searchString: {},
    marker: {
        position: 'absolute',
        top: 40
    },
    markerContainer: {
        position: 'relative'
    }
});
