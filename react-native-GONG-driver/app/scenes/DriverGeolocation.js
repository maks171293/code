import  React, {Component} from 'react';
import  LayoutStyle from  '../styles/Layout'
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    Image,
    ActivityIndicator,
    Animated,
    AsyncStorage,
    Platform,
    Linking
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import AutoComplete from '../components/AutoComplete';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import * as actionsJob from '../constants/actionsJob'
import * as UAction from '../constants/actionsUser';
import API from '../services/api';
import * as global from '../constants/global';
import Icon from '../assets/svg/svg';

//translations
import {strings} from '../utilits/localStrings.js';

const Permissions = require('react-native-permissions');
import {width, height} from '../styles/Variables';
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.011527469804754276;
const DELTS = {
    latitude: 0.011527469804754276,
    longitude: LATITUDE_DELTA * ASPECT_RATIO
};
const dismissKeyboard = require('dismissKeyboard');

class DriverGeolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: DELTS.latitude,
                longitudeDelta: DELTS.longitude,
            },
            driverCoordinates: {
                latitude: 37.78825,
                longitude: -122.4324,
            },
            isApproved: true,
        };

        this.sendLocationToServer = this.sendLocationToServer.bind(this);
    }

    componentWillMount () {

        this._isMounted = true;
        //We make this call in DrawerMenu for all screens
        Permissions.requestPermission('location')
            .then(() => {
                this.sendLocationToServer();
                this.locationInterval = setInterval(this.sendLocationToServer, 5000);
            }, () => {
                alert(strings["You need to accept location permissions"]);
            })
            .catch(() => {
                alert(strings["You need to accept location permissions"]);
                });
    }

    componentWillUnmount() {
        this._isMounted = false;
        // interval from component will mount is clear in DrawerMenu
        // clearInterval(this.locationInterval);
    }

    sendLocationToServer () {
        navigator.geolocation.getCurrentPosition((position) => {
            if (!this._isMounted) return;

            position = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };

            this.setState({
                region: {
                    ...this.state.region,
                    ...position
                },
                driverCoordinates: position
            }, () => {
                this.mapView.animateToRegion(this.state.region, 1000);
            });

            // let data = {
            //     token: this.props.user.token,
            //     location: {
            //         lat: position.latitude,
            //         lng: position.longitude
            //     }
            // };
            // API.sendLocation(data, (result) => {
            //     if (!this._isMounted) return;
            //
            //     if (typeof result.success !== 'undefined') {
            //         this.setState({isApproved: result.success})
            //     }
            // });
        },
        (error) => {
            alert(strings['GPS no available.']);
            console.log(error);
        },
        {
            enableHighAccuracy: false,
            timeout: 999999,
            maximumAge: 1000
        });

    }

    // findJob() {
    //     // release mod
    //     let data = {
    //         driver_id: this.props.user.driver_id,
    //         driver_latitude: this.state.region.latitude,
    //         driver_longitude: this.state.region.longitude,
    //         language: global.LANGUAGES[this.props.language.index].code,
    //         job_without_answer: this.props.job.jobWithoutAnswer
    //     };
    //
    //     // test mod
    //     // let data = {
    //     //     driver_id: 1,
    //     //     driver_latitude: 50.3977108,
    //     //     driver_longitude: 30.4809181,
    //     //     language: "en",
    //     //     job_without_answer: false
    //     // };
    //
    //     API.findJob({token: this.props.user.token, data}, function (result) {
    //         console.log(result);
    //
    //         if (!result.error && result.job) {
    //             this.props.newJob(result.job);
    //             PushNotification.localNotificationSchedule({
    //                 message: "New Job!",
    //                 date: new Date(Date.now())
    //             });
    //             setTimeout(Actions.jobReceives, 200)
    //         }
    //
    //     }.bind(this));
    // }


    // onRegionChangeManual(region) {
    //     // let timer = setInterval(() => {
    //     //     this.findJob()
    //     // }, 5000);
    //     // this.setState({region, timer});
    //     this.setState({region}, () => this.runTimer());
    //     this.regionToStorage(region);
    // }

    // runTimer() {
    //
    //     let timer = setInterval(()=> {
    //         // release mod
    //         let data = {
    //             driver_id: this.props.user.driver_id,
    //             driver_latitude: this.state.region.latitude,
    //             driver_longitude: this.state.region.longitude,
    //             language: global.LANGUAGES[this.props.language.index].code,
    //             job_without_answer: this.props.job.jobWithoutAnswer
    //         };
    //
    //         // test mod
    //         // let data = {
    //         //     driver_id: 1,
    //         //     driver_latitude: 50.3977108,
    //         //     driver_longitude: 30.4809181,
    //         //     language: "en",
    //         //     job_without_answer: false
    //         // };
    //
    //         console.log(data, 'data send');
    //
    //         API.findJob({token: this.props.user.token, data}, function (result) {
    //             console.log(result);
    //
    //             if (!result.error && result.job) {
    //                 this.props.newJob(result.job);
    //                 // PushNotification.localNotificationSchedule({
    //                 //     message: "New Job!",
    //                 //     date: new Date(Date.now())
    //                 // });
    //                 setTimeout(Actions.jobReceives, 200);
    //
    //                 clearInterval(timer);
    //             }
    //
    //         }.bind(this));
    //     }, 15000);
    // }
    //
    // doGeocodePosition(coordinates, region) {
    //     console.log('geocoder');
    //     return;
    //     Geocoder.geocodePosition(coordinates).then(res => {
    //         // res is an Array of geocoding object (see below)
    //         let searchString = res[0].formattedAddress;
    //         this.setState({searchString, region: region, showSearchBlock: true});
    //     })
    //         .catch(err => console.log(err))
    // }

    // onRegionChangeComplete(newRegion) {
    //     DELTS.latitude = newRegion.latitudeDelta;
    //     DELTS.longitude = newRegion.longitudeDelta;
    // }

    // regionToStorage(region) {
    //     let coordinates = {
    //         lat: region.latitude,
    //         lng: region.longitude
    //     };
    //     this.doGeocodePosition(coordinates, region);
    // }

    // setCurrentGeolocation() {
    //     this.onRegionChangeManual(currentPosition);
    // }

    // addressCheck() {
    //     this.setState({addressCheck: 1});
    // }

    // autoCompleteChange(location, address) {
    //     let region = {
    //         latitude: location.lat,
    //         longitude: location.lng,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA,
    //     };
    //     this.setState({
    //         region: region,
    //         searchString: address,
    //     });
    //     this.regionToStorage(region);
    // }
    //
    // renderCheckButton() {
    //     if (this.state.waiting) {
    //         return (
    //             <View style={styles.findButton}>
    //                 <ActivityIndicator
    //                     animating={this.state.waiting}
    //                     size="large"
    //                 />
    //             </View>
    //         );
    //     } else {
    //         return (
    //             <TouchableOpacity
    //                 style={styles.findButton}
    //                 onPress={()=>{
    //                     this.setCurrentGeolocation();
    //                     this.setState({waiting: true});
    //                     setTimeout(()=>{this.setState({waiting: false, isApproved: true})}, 2000);
    //                 }}
    //             >
    //                 <Icon
    //                     name="refresh"
    //                 />
    //             </TouchableOpacity>
    //         );
    //     }
    // }


    // onRegionChangeComplete(newRegion) {
    //     DELTS.latitude = newRegion.latitudeDelta;
    //     DELTS.longitude = newRegion.longitudeDelta;
    // }

    render() {
        return (
            <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>

                <View style={[LayoutStyle.contentContainer, styles.contentContainer]}>
                    {this.state.isApproved ?
                        <View/>
                        :
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[LayoutStyle.h1, {flex: 1}]}>
                                {strings["You are not approved yet.\nYou can't receive any jobs"]}
                            </Text>
                            {/*{this.renderCheckButton()}*/}
                        </View>
                    }

                    <View style={{flex: 1}}>
                        <MapView
                            ref={c => this.mapView = c}
                            provider={PROVIDER_GOOGLE}
                            //showsMyLocationButton={true}
                            resizeMode={'cover'}
                            initialRegion={this.state.region}
                            onRegionChangeComplete={(region)=>{
                                this.setState({region});
                            }}
                            //onRegionChange={(region) => {
                            //    this.setState({region});
                            //}}
                            style={styles.mapView}
                        >
                            <MapView.Marker
                                coordinate={{
                                    latitude: this.state.driverCoordinates.latitude,
                                    longitude: this.state.driverCoordinates.longitude,
                                }}
                                style={{
                                    width: 40,
                                    height: 40,
                                }}
                            />
                        </MapView>
                    {/*<PushNewJob />*/}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        overflow: 'hidden',
        minHeight: height,
    },
    marker: {
        position: 'absolute',
        top: 40
    },
    mapView: {
        flex: 1,
        marginBottom: -25,
    }
});

export default connect(
    state => ({
        // footer: state.footer,
        job: state.job,
        // language: state.language,
        user: state.user
    }),
    dispatch => ({
        removeStorageUser: (callback) => {
            dispatch({type: UAction.CLEAR_USER, callback});
        }
    })
)(DriverGeolocation);
