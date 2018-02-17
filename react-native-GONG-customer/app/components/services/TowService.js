import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage,
    Linking,
    Switch,
} from 'react-native';

import  LayoutStyle from  '../../styles/Layout'
import  MapService from  './components/MapService'
import {connect} from 'react-redux';
import Geocoder from 'react-native-geocoder';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.011527469804754276;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Storage from 'react-native-storage';
import LocationInput from  './components/LocationInput';
const DELTS = {
    latitude: 0.011527469804754276,
    longitude: LATITUDE_DELTA * ASPECT_RATIO
};

class TowService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            destinationCheck: 0,
            destination: '',
            searchString: '',
            knowDestination: 1,
            destinationAddress: {
                width: 320,
                top: 10,
                left: 0,
                right: 0,
                bottom: 0,
                height: 265
            },
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            currentRegion: 0,
            regionDestination: 0,
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
            vehicle: (this.props.vehicle.vehicleName) ? this.props.vehicle.vehicleName : 'Vehicle doesn`t chosen',
            allPoints: [],
            showDistance: false,
            distance: null,
            trueSwitchIsOn: true,
            serviceTitle: ''
        };

        this.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });

        this.autoCompleteChange = this.autoCompleteChange.bind(this);
        this.onRegionChangeManual = this.onRegionChangeManual.bind(this);
        this.addressCheck = this.addressCheck.bind(this);
        this.destinationCheck = this.destinationCheck.bind(this);
        this.manualPress = this.manualPress.bind(this);
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
        this.buildRoute = this.buildRoute.bind(this);
        this._setIKnowMyDestination = this._setIKnowMyDestination.bind(this);
    }

    componentDidMount() {
        this.storage.load({
            key: 'region',
        }).then(ret => {
            let region = ret.region;
            let geocode = ret.geocode;
            this.onRegionChangeManual(region);
            this.setState({location: geocode});
        }).catch(err => {
            console.warn(err);
        });

        this.storage.load({
            key: 'service',
        }).then(ret => {
            // let serviceId = ret.id;
            // let serviceTitle = ret.title;
            // this.onRegionChangeManual(region);
            this.setState({serviceTitle: ret.title});
        }).catch(err => {
            console.warn(err);
        });
        this.setState({vehicle: (this.props.vehicle.vehicleName) ? this.props.vehicle.vehicleName : 'Vehicle doesn`t chosen'});
        this.props.doShow();
    }

    buildRoute() {
        let pointA = this.state.region;
        let pointB = this.state.regionDestination;
        console.log(pointA, pointB)

        fetch("https://maps.googleapis.com/maps/api/directions/json?origin=" + pointA.latitude + "," + pointA.longitude + "&destination=" + pointB.latitude + "," + pointB.longitude + "&key=AIzaSyCvmHIDCBdcW826SWpbMidBfr_LbCFnstI", {method: "GET"})
            .then((response) => response.json())
            .then((responseData) => {

                if (responseData.status == "OK") {
                    let bounds = responseData.routes[0].bounds;

                    this.doCentered(bounds);

                    let pol = responseData.routes[0].overview_polyline.points;
                    let distance = responseData.routes[0].legs[0].distance.text;

                    this.decodePolyline(pol, distance);
                } else {

                    this.setState({
                        destinationCheck: false,
                        allPoints: [],
                        regionDestination: 0,
                        searchString: '',
                        distance: null,
                    });
                    alert('Incorrect destination')
                }
            })
            .done();
    }

    doCentered(bounds) {
        let minX = bounds.southwest.lat,
            maxX = bounds.northeast.lat,
            minY = bounds.southwest.lng,
            maxY = bounds.northeast.lng;

        let midX = (minX + maxX) / 2;
        let midY = (minY + maxY) / 2;

        let deltaX = (maxX - minX);
        let deltaY = (maxY - minY);

        let currentRegion = {
            latitude: midX,
            longitude: midY,
            latitudeDelta: deltaX + 0.01,
            longitudeDelta: deltaY + 0.01,
        };

        this.setState({currentRegion: currentRegion});
    }

    decodePolyline(encoded, distance) {
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

        this.setState({allPoints: poly, distance: distance, showDistance: true, destinationCheck: true});
        return poly;
    }

    onRegionChangeManual(region) {
        this.setState({region});
    }

    manualPress(name) {
        if (!this.state.trueSwitchIsOn)return;
        let curLatDel = this.state.currentRegion.latitudeDelta;
        let curLonDel = this.state.currentRegion.longitudeDelta;
        let regionDestination = {
            latitude: name.nativeEvent.coordinate.latitude,
            longitude: name.nativeEvent.coordinate.longitude,
            latitudeDelta: curLatDel,
            longitudeDelta: curLonDel,
        };
        this.setState({regionDestination, allPoints: [], distance: ''});

        let coordinates = {
            lat: regionDestination.latitude,
            lng: regionDestination.longitude
        };

        Geocoder.geocodePosition(coordinates).then(res => {

            let searchString = res[0].formattedAddress;

            this.setState({searchString, showSearchBlock: true}, ()=>this.buildRoute());
        })
            .catch(err => console.log(err))
    }

    addressCheck(status) {
        this.setState({addressCheck: status});
    }

    destinationCheck(status) {
        this.setState({destinationCheck: status});
    }

    autoCompleteChange(location, address) {
        let regionDestination = {
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        };
        this.setState({
            regionDestination,
            currentRegion: regionDestination,
            searchString: address,
            showSearchBlock: true
        }, ()=>this.buildRoute());
    }

    onRegionChangeComplete(newRegion) {
        console.log(newRegion, 'that');
        DELTS.latitude = newRegion.latitudeDelta;
        DELTS.longitude = newRegion.longitudeDelta;
        this.setState({currentRegion: newRegion})
    }

    _setIKnowMyDestination(value) {
        (!value) ? this.setState({
            trueSwitchIsOn: value,
            destinationCheck: !value,
            allPoints: [],
            regionDestination: 0,
            searchString: '',
            distance: null,
        }) : this.setState({trueSwitchIsOn: value, destinationCheck: !value});
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={LayoutStyle.fuelTitle}>Send me help now!</Text>
                <LocationInput />
                <MapService
                    region={this.state.region}
                    regionDestination={this.state.regionDestination}
                    autoCompleteChange={this.autoCompleteChange}
                    focusSearchOut={this.focusSearchOut}
                    focusSearchIn={this.focusSearchIn}
                    addressCheck={this.addressCheck}
                    destinationCheck={this.destinationCheck}
                    addressCheckStatus={this.state.addressCheck}
                    destinationCheckStatus={this.state.destinationCheck}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    currentRegion={this.state.currentRegion}
                    searchString={this.state.searchString}
                    trueSwitchIsOn={this.state.trueSwitchIsOn}
                    showSearchBlock={this.state.showSearchBlock}
                    manualPress={this.manualPress}
                    buildRoute={this.buildRoute}
                    showDistance={this.state.showDistance}
                    distance={this.state.distance}
                    allPoints={this.state.allPoints}/>
                <View style={LayoutStyle.serviceTitleList}>
                    <Text style={LayoutStyle.serviceLeftTitle}>
                        Vehicle
                    </Text>
                    <Text style={LayoutStyle.serviceRightTitle}>
                        {this.state.vehicle}
                    </Text>
                </View>
                <View style={LayoutStyle.serviceTitleListTwo}>
                    <Text style={LayoutStyle.serviceLeftTitle}>
                        Service
                    </Text>
                    <Text style={LayoutStyle.serviceRightTitle}>
                        {this.state.serviceTitle}
                    </Text>
                </View>
                <View style={LayoutStyle.serviceTitleListThree}>
                    <Text style={LayoutStyle.serviceLeftTitle}>
                        I know destination
                    </Text>

                    <Switch style={LayoutStyle.destinationSwitch}
                            onValueChange={(value) => this._setIKnowMyDestination(value)}
                            value={this.state.trueSwitchIsOn}/>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        vehicle: state.vehicle
    }),
)(TowService);
