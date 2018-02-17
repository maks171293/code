import React, {PropTypes, Component} from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    View
} from "react-native";
import  LayoutStyle from  '../styles/Layout'
import  StringHelper from  '../utilits/StringHelper'
import {connect} from 'react-redux';
import API from '../services/api'
import * as UAction from '../constants/actionsUser';
import * as VAction from '../constants/actionsVehicle';
import * as global from '../constants/global';
import Storage from 'react-native-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
import {Actions} from 'react-native-router-flux';
const dismissKeyboard = require('dismissKeyboard');

/**
 * Login form with validation
 */
class LoginForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
            editableInput: true
        }
        this.storage = new Storage({
            size: 100000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });

    }

    /**
     * validate all form fields  and send form
     */
    submitForm() {

        if (!this.state.password || !this.state.username) {
            this.setState({message: 'Fields can not be empty !'});
        }

        else {
            dismissKeyboard();
            this.setState({editable: !this.state.editableInput});
            /**
             * send login data to server
             * @type {any}
             */
            API.login({
                username: this.state.username,
                password: StringHelper.md5(this.state.password)
            }, function (result) {

                if (result.username) {
                    this.setState({message: result.username[0]});
                    return 0;
                }
                else if (result.error) {
                    this.setState({message: result.message});
                    return 0;
                }
                else {
                    console.log(result);
                    /**
                     * save user in storage
                     */
                    this.storage.save({
                        key: global.LOGIN,
                        rawData: {
                            token: result.api_token,
                            user_id: result.user_id,

                        },
                    });
                    this.props.onChangeUser({token: result.api_token, user_id: result.user_id}); //update user store
                    /**
                     * get vehicle by user
                     */
                    API.getCustomer(result.api_token, function (result) {
                        /**
                         * save vehicle
                         */
                        this.storage.save({
                            key: global.VEHICLE,
                            rawData: {
                                vehicleName: result[0].vehicle_name,
                                vehicleModel: result[0].vehicle_model,
                                vehicleId: result[0].vehicle_id,
                                vehicleLicensePlate: result[0].vehicle_license_plate,
                                vehicleColor: result[0].vehicle_color

                            },
                            expires: 1000 * 3600 * 24
                        });
                        this.props.onChangeVehicle({
                            vehicleName: result[0].vehicle_name,
                            vehicleModel: result[0].vehicle_model,
                            vehicleId: result[0].vehicle_id,
                            vehicleLicensePlate: result[0].vehicle_license_plate,
                            vehicleColor: result[0].vehicle_color
                        }); //update vehicle store

                        return 1;
                    }.bind(this));

                    Actions.roadsideService();
                }
            }.bind(this));
            this.setState({editable: !this.state.editableInput});
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView style={{marginTop: 54}}
                                     keyboardShouldPersistTaps={true}>
                <View style={LayoutStyle.container}>
                    <Text style={LayoutStyle.title}>{this.props.strings.login}</Text>
                    <View>
                        <View style={[LayoutStyle.formField, {marginTop: 10}]}>
                            <Icon name="Name" size={50} color="#575757"/>
                            <View style={LayoutStyle.textInputContainer}>
                                <TextInput
                                    placeholder={this.props.strings.username}
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='login'
                                    maxLength={50}
                                    onChangeText={(text) => this.setState({username: text})}
                                    style={[LayoutStyle.textInput]}/>
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField, {marginTop: 10}]}>
                            <Icon name="Lock_close" size={50} color="#575757"/>
                            <View style={LayoutStyle.textInputContainer}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"done"}
                                    onSubmitEditing={this.submitForm.bind(this)}
                                    ref="passwordInput"
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    maxLength={50}
                                    onChangeText={(text) => this.setState({password: text})}
                                    style={[LayoutStyle.textInput]}
                                />
                            </View>
                        </View>
                        <View style={LayoutStyle.formField}>
                            <Text style={LayoutStyle.errorText}>{this.state.message}</Text>
                        </View>
                        <TouchableHighlight
                            onPress={this.submitForm.bind(this)}
                            style={LayoutStyle.btn}>
                            <Text
                                style={LayoutStyle.btnText}>Login
                            </Text>
                        </TouchableHighlight >
                        <View style={LayoutStyle.formField}>
                            <Text>Don't have an account?</Text>
                        </View>
                        <TouchableOpacity
                            onPress={Actions.signup}>
                            <Text style={[LayoutStyle.errorText, {paddingLeft: 12}]}>Sign Up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => ({
        onChangeUser: (user) => {
            dispatch({type: UAction.UPDATE_USER, user: user});
        },
        onChangeVehicle: (vehicle) => {
            dispatch({type: VAction.VEHICLE_UPDATE, vehicle: vehicle});
        }
    })
)(LoginForm);

