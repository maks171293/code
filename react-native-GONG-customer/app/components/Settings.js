import React, {PropTypes, Component}from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, Platform, Dimensions, View, AsyncStorage} from "react-native";
import  LayoutStyle from  '../styles/Layout'
import {connect} from 'react-redux';
import * as languageType from '../constants/languageType'
import * as vehicleAction from '../constants/actionsVehicle'
import API from '../services/api'
import Validator from '../utilits/validator'
import Storage from 'react-native-storage';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import  RadioButton from './RadioButton'
import {Actions} from 'react-native-router-flux';
import  Autocomplete from 'react-native-autocomplete-input'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import * as global from  '../constants/global'

const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const dismissKeyboard = require('dismissKeyboard');

class Settings extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            username: '',
            name: '',
            confirmPassword: '',
            email: '',
            phone: '',
            password: '',
            message: '',
            carModel: this.props.vehicle.vehicleModel,
            carColor: this.props.vehicle.vehicleColor,
            carLicense: this.props.vehicle.vehicleLicensePlate,
            vehicle_id: this.props.vehicle.vehicleId,
            success: false,
            vehicle: this.props.vehicle.vehicleName,
            vehicles: [],
            zIndexAutocomplete: 2,
            textInputContainer: 0,
            heightAutocomplete: 50,
            autocomplateWidth: 200,
            editableInput: true,
            language: this.props.language.index,

        }


        this._vehicleData();
        this._checkVehicleExist = this._checkVehicleExist.bind(this);
        this._onChangePhone.bind(this);
        this._submitForm = this._submitForm.bind(this);

        this.storage = new Storage({
            size: 100000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });

    }

    _vehicleData() {
        API.vehicles({
            name: this.state.vehicle
        }, function (result) {
            // console.log(result);
            if (result.error) {
                this.setState({message: result.message});
                return 0;
            }
            this.setState({vehicles: result});
        }.bind(this));
    }

    _handleFocus(event) {
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);


    }

    _checkVehicleExist() {
        let isExist = false;
        this.state.vehicles.forEach(function (vehicle, index) {
            if (vehicle.name.trim().toLowerCase() == this.state.vehicle.trim().toLowerCase()) {
                isExist = true;
            }
        }.bind(this));

        return isExist;
    }

    _onChangePhone(text) {
        if (!isNaN(text)) {
            this.setState({
                message: '',
                phone: text
            });
        }
        else {
            this.setState({
                message: 'Only number value!',
            });
        }
    }

    _getCustomerData() {
        API.getCustomer(this.props.user.token, function (result) {
            console.log(result);
            console.log(result[0].name);
            this.setState({
                name: result[0].name,
                username: result[0].username,
                email: result[0].email,
                phone: result[0].phone,
                carColor: result[0].vehicle_color,
                vehicle: result[0].vehicle_name,
                carModel: result[0].vehicle_model,
                carLicense: result[0].vehicle_license_plate


            });
            return 1;
        }.bind(this));
    }

    _measureHeader() {
        this.refs.phone.measure((ox, oy, width, height) => {
            this.state.autocomplateWidth = width;
            return;
        });
    }

    componentDidMount() {
        setTimeout(this._getCustomerData.bind(this));
        setTimeout(this._measureHeader.bind(this));


    }

    /**
     * validate all inputs in submit
     */
    _submitForm() {

        if (!this.state.username || !this.state.email || !this.state.name || !this.state.phone) {
            this.setState({message: 'Fields can not be empty !'});
        }
        else if (this.state.username && !Validator.specialChars(this.state.username)) {
            this.setState({
                message: 'Username can contain only letters and numbers.\n' +
                ' No special characters.', success: false
            });
        }
        else if (!Validator.onlyLetters(this.state.name)) {
            this.setState({
                message: 'Name can contain only letters and numbers.\n' +
                ' No special characters.'
            });
        }
        else if ((this.state.confirmPassword && !Validator.specialChars(this.state.confirmPassword)) || (this.state.password && !Validator.specialChars(this.state.password))) {
            this.setState({
                message: 'Password can contain only letters and numbers.\n' +
                ' No special characters.', success: false
            });
        }
        else if (!Validator.validateEmail(this.state.email)) {
            this.setState({message: 'The email must be a valid email address !', success: false});
        }
        else if (this.state.password != this.state.confirmPassword) {
            this.setState({message: 'Confirm password does not match !', success: false});
        }
        else if (!this._checkVehicleExist()) {
            this.setState({message: 'Please, choose existing car brand !', success: false});
        }
        else {

            dismissKeyboard();
            this.setState({editable: !this.state.editableInput});
            /**
             * save vehicle to storage
             */
            this.storage.save({
                key: global.VEHICLE,
                rawData: {
                    vehicleName: this.state.vehicle,
                    vehicleModel: this.state.carModel,
                    vehicleId: this.state.vehicleId,
                    vehicleLicensePlate: this.state.carLicense,
                    vehicleColor: this.state.carColor
                },
                expires: 1000 * 3600 * 24
            });
            /**
             * save vehicle to redux store
             */
            this.props.onChangeVehicle({
                vehicleName: this.state.vehicle,
                vehicleModel: this.state.carModel,
                vehicleId: this.state.vehicleId,
                vehicleLicensePlate: this.state.carLicense,
                vehicleColor: this.state.carColor
            }); //update vehicle store

            let password = (this.state.password) ? StringHelper.md5(this.state.password) : null;
            API.updateCustomer({
                    username: this.state.username,
                    name: this.state.name,
                    email: this.state.email,
                    phone: this.state.phone,
                    vehicle_id: this.state.vehicle_id,
                    vehicle_color: this.state.carColor,
                    vehicle_model: this.state.carModel,
                    vehicle_license_plate: this.state.carLicense,
                    token: this.props.user.token,
                    password: password
                }, function (result) {
                    console.log(result);
                    if (result.username) {
                        this.setState({message: result.username[0], success: false});
                        return 0;
                    }
                    else if (result.email) {
                        this.setState({message: result.email[0], success: false});
                        return 0;
                    }
                    else if (result.error) {
                        this.setState({message: result.message, success: false});
                        return 0;
                    }
                    else {
                        this.props.strings.setLanguage(global.LANGUAGES[this.state.language].code);
                        this.storage.save({
                            key: global.LANGUAGE,
                            rawData: {
                                index: this.state.language,
                            },
                            expires: 1000 * 3600 * 24
                        });
                        this.props.onChangeLanguage(this.state.language);
                        Actions.customerGeolocation({loader: false})
                    }
                }.bind(this)
            );


            this.setState({editable: !this.state.editableInput});
        }


    }

    /**
     * Set state option
     *@param index selected option
     */
    setLanguageRadioOption(index) {
        this.setState({language: index});
    }

    _findData(query) {
        if (!query)return [];
        let result = [];
        this.state.vehicles.map(function (vehicle, index) {
            if (vehicle.name.trim().toLowerCase().indexOf(query.trim().toLowerCase()) != -1) {
                result.push(this.state.vehicles[index]);
            }
        }.bind(this));
        return result;
    }

    blur(field) {
        this.refs[field].blur()
    }

    render() {
        const data = this._findData(this.state.vehicle);
        return (
            <KeyboardAwareScrollView style={[{marginTop: (Platform.OS === 'ios') ? 0 : 60,}]}
                                     ref="keyboardAwareScrollView"
                                     keyboardShouldPersistTaps={true}
                                     enableAutoAutomaticScroll={true}
                                     extraHeight={60}
            >
                <View style={[LayoutStyle.container, {marginTop: (Platform.OS === 'ios') ? 50 : 0,}]}>
                    <Text style={LayoutStyle.title}>Personal settings</Text>

                    <View >
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Name" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.username || !Validator.specialChars(this.state.username))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={false}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.nameInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    maxLength={50}
                                    value={this.state.username}
                                    placeholder="Username"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({username: text.trim()})}
                                />
                            </View>

                        </View>
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Name" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.name || !Validator.onlyLetters(this.state.name))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='nameInput'
                                    value={this.state.name}
                                    placeholder="Name"
                                    maxLength={50}
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({name: text})}
                                />
                            </View>
                        </View>
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Lock_open" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.password && !Validator.specialChars(this.state.password)) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.passwordConfInput.focus();
                                    }}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    blurOnSubmit={false}
                                    ref='passwordInput'
                                    value={this.state.password}
                                    maxLength={50}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    onChangeText={(text) => this.setState({password: text.trim()})}
                                    style={[LayoutStyle.textInput]}
                                />
                            </View>
                        </View>
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Lock_close" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, ((this.state.confirmPassword && !Validator.specialChars(this.state.confirmPassword)) || (this.state.password && !this.state.confirmPassword && this.state.message) || (this.state.confirmPassword && this.state.password != this.state.confirmPassword)) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.email.focus();
                                    }}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    blurOnSubmit={false}
                                    ref='passwordConfInput'
                                    maxLength={50}
                                    value={this.state.confirmPassword}
                                    placeholder="Confirm password" secureTextEntry={true}
                                    onChangeText={(text) => this.setState({confirmPassword: text.trim()})}
                                    style={[LayoutStyle.textInput]}
                                />
                            </View>
                        </View>
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Mail" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.email || !Validator.validateEmail(this.state.email))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.phone.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='email'
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    value={this.state.email}
                                    placeholder="Email"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({email: text.trim()})}
                                />
                            </View>
                        </View>
                        <View style={LayoutStyle.formColumn}>
                            <Icon name="Phone" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.phone) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"done"}
                                    ref='phone'
                                    maxLength={14}
                                    value={this.state.phone}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    placeholder="Bussines phone number"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this._onChangePhone(text.trim())}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={LayoutStyle.formColumn}>
                                <Text style={LayoutStyle.subTitle}>Select language ...</Text>
                            </View>
                            {global.LANGUAGES.map(function (language, index) {
                                return (
                                    <View style={styles.radio}>
                                        <RadioButton innerColor='#575757'
                                                     outerColor='#575757'
                                                     onPress={() => this.setLanguageRadioOption(index)}
                                                     size={9}
                                                     animation={'bounceIn'}
                                                     isSelected={this.state.language == index}/>
                                        <Icon size={40} name={language.icon} color="#575757" style={
                                        {
                                            position: 'absolute',
                                            top: -2,
                                        }
                                        } fontSize="2"/>
                                        <Text style={{
                                            textAlign: 'left',
                                            left: 30,
                                            top: -2,
                                            color: "#575757"
                                        }}> {language.label}</Text>
                                    </View>
                                )
                            }.bind(this))}


                        </View>
                        <View style={{borderBottomWidth: 2, marginTop: 10, borderColor: 'lightgray'}}>
                            <Text style={LayoutStyle.subTitle}>Choose your car</Text>
                        </View>

                        <Autocomplete
                            editable={this.state.editableInput}
                            returnKeyType={"next"}
                            onSubmitEditing={(event) => {
                                this.setState({zIndexAutocomplete: 2, heightAutocomplete: 50});
                                this.refs.model.focus();
                            }}
                            blurOnSubmit={false}
                            data={data}
                            defaultValue={this.state.vehicle}
                            placeholder="Car brand"
                            containerStyle={[styles.textInputContainer, {
                                marginBottom: 10,
                                marginTop: 10,
                                left: 0,
                                zIndex: this.state.zIndexAutocomplete,
                                height: this.state.heightAutocomplete
                            }]}
                            inputContainerStyle={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.vehicle || !this._checkVehicleExist())) ? {borderColor: 'red'} : {}]}
                            style={LayoutStyle.textInput}
                            listStyle={[styles.carList, {height: this.state.heightAutocomplete - 50}]}
                            onBlur={ () => this.setState({zIndexAutocomplete: 2, heightAutocomplete: 50})}
                            onFocus={ () => this.setState({zIndexAutocomplete: 5, heightAutocomplete: 110})}
                            ref="autocomplete"
                            maxLength={30}
                            onChangeText={(text) => this.setState({
                                vehicle: text,
                                zIndexAutocomplete: 5,
                                heightAutocomplete: 110
                            })}
                            renderItem={data => (

                                data.name != this.state.vehicle ?
                                    <TouchableOpacity
                                        style={{backgroundColor: 'white'}}
                                        onPress={() => {

                                            this.setState({
                                                vehicle: data.name,
                                                vehicle_id: data.id,
                                                zIndexAutocomplete: 2, heightAutocomplete: 50
                                            });
                                        }}
                                    >
                                        <Text>{data.name}</Text>
                                    </TouchableOpacity>
                                    : null
                            )}
                        />

                        <View style={[LayoutStyle.formColumn, {zIndex: 3, marginTop: 55,}]}>
                            <View
                                style={[LayoutStyle.textInputContainer]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.color.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='model'
                                    style={LayoutStyle.textInput}
                                    placeholder="Car model"
                                    maxLength={30}
                                    value={this.state.carModel}
                                    keyboardType='default'
                                    onChangeText={(text) => this.setState({carModel: text})}
                                />
                            </View>
                        </View>
                        <View>
                            <View style={{marginTop: 10}}>
                                <Text style={LayoutStyle.subTitle}>Set your car options</Text>
                            </View>
                            <View style={LayoutStyle.formColumn}>
                                <View
                                    style={[LayoutStyle.textInputContainer]}>
                                    <TextInput
                                        editable={this.state.editableInput}
                                        returnKeyType={"next"}
                                        blurOnSubmit={false}
                                        ref='color'
                                        onSubmitEditing={(event) => {
                                            this.refs.license.focus();
                                        }}
                                        style={LayoutStyle.textInput}
                                        placeholder="Car color"
                                        maxLength={20}
                                        value={this.state.carColor}
                                        keyboardType='default'
                                        onChangeText={(text) => this.setState({carColor: text})}
                                    />
                                </View>

                            </View>
                            <View style={[LayoutStyle.formColumn, {marginTop: 0}]}>
                                <View
                                    style={[LayoutStyle.textInputContainer]}>
                                    <TextInput
                                        editable={this.state.editableInput}
                                        value={this.state.carLicense}
                                        returnKeyType={"done"}
                                        onSubmitEditing={this._submitForm}
                                        ref="license"
                                        style={LayoutStyle.textInput}
                                        placeholder="License plate"
                                        maxLength={10}
                                        onFocus={(event) => {
                                            this._handleFocus(event);
                                        }}
                                        keyboardType='default'
                                        onChangeText={(text) => this.setState({carLicense: text})}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop: 10}}>
                            <Text
                                style={(this.state.success) ? LayoutStyle.successText : LayoutStyle.errorText}>{this.state.message}</Text>
                        </View>
                        <View style={[LayoutStyle.formColumn, {justifyContent: 'center'}]}>
                            <TouchableOpacity
                                onPress={this._submitForm}
                                style={[LayoutStyle.btn, {width: 70}]}>
                                <Text
                                    style={LayoutStyle.btnText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    state => ({
        language: state.language,
        user: state.user,
        vehicle: state.vehicle
    }),
    dispatch => ({
        onChangeVehicle: (vehicle) => {
            dispatch({type: vehicleAction.VEHICLE_UPDATE, vehicle: vehicle});
        },
        onChangeLanguage: (index) => {
            dispatch({type: languageType.LANGUAGE_CHANGE, index: index});
        }
    })
)(Settings);

const styles = StyleSheet.create({
    radio: {
        paddingTop: 10,
        flexDirection: 'row',
        marginBottom: 5,
    },
    textInputContainer: {
        position: 'absolute',
    },
    carList: {
        position: 'absolute',
        top: 40,
        left: 0,
        borderWidth: 2,
        borderColor: 'red',
        width: 200
    }

});