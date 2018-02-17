import React, {PropTypes, Component}from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, Platform, View} from "react-native";
import  LayoutStyle from  '../styles/Layout'
import {AsyncStorage} from 'react-native';
import API from '../services/api'
import {connect} from 'react-redux';
import * as UAction from '../constants/actionsUser';
import Validator from '../utilits/validator'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Storage from 'react-native-storage';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {Actions} from 'react-native-router-flux';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const dismissKeyboard = require('dismissKeyboard');

/**
 * Sign up form for register new customer
 */
class SignUpForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            name: '',
            confirmPassword: '',
            email: '',
            phone: '',
            password: '',
            message: '',
            editableInput: true
        }
        this.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {
                // we'll talk about the details later.
            }
        });
        this.onChangePhone.bind(this);


    }

    _handleFocus(event) {
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);
    }

    onChangePhone(text) {
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

    /**
     * validate all inputs in submit
     */
    submitForm() {

        if (!this.state.password || !this.state.username || !this.state.confirmPassword || !this.state.email || !this.state.name || !this.state.phone) {
            this.setState({message: 'Fields can not be empty !'});
        } else if (!Validator.specialChars(this.state.username)) {
            this.setState({
                message: 'Username can contain only letters and numbers.\n' +
                ' No special characters.'
            });
        }
        else if (!Validator.onlyLetters(this.state.name)) {
            this.setState({
                message: 'Name can contain only letters and numbers.\n' +
                ' No special characters.'
            });
        }
        else if (!Validator.specialChars(this.state.confirmPassword) || !Validator.specialChars(this.state.password)) {
            this.setState({
                message: 'Password can contain only letters and numbers.\n' +
                ' No special characters.'
            });
        }
        else if (!Validator.validateEmail(this.state.email)) {
            this.setState({message: 'The email must be a valid email address !'});
        }
        else if (this.state.password != this.state.confirmPassword) {
            this.setState({message: 'Confirm password does not match !'});
        }
        else {

            dismissKeyboard();
            this.setState({editable: !this.state.editableInput});
            API.signUp({
                username: this.state.username,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: StringHelper.md5(this.state.password)
            }, function (result) {
                // console.log(result);
                if (result.username) {
                    this.setState({message: result.username[0]});
                    return 0;
                }
                else if (result.email) {
                    this.setState({message: result.email[0]});
                    return 0;
                }
                else if (result.error) {
                    this.setState({message: result.message});
                    return 0;
                }
                else {
                    this.storage.save({
                        key: 'login',
                        rawData: {
                            token: result.api_token,
                            userId: result.user_id,

                        },
                    });
                    this.props.onChangeUser({token: result.api_token, user_id: result.user_id}); //update user store
                    Actions.vehicleChange();
                }

            }.bind(this));

            this.setState({editable: !this.state.editableInput});
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView
                ref="keyboardAwareScrollView"
                enableAutoAutomaticScroll={true}
                style={[{marginTop: (Platform.OS === 'ios') ? 0 : 60,}]}
                keyboardShouldPersistTaps={true}>
                <View style={[LayoutStyle.container, {marginTop: (Platform.OS === 'ios') ? 50 : 0,}]}>
                    <Text style={LayoutStyle.title}>Register to became a GONG Partner</Text>
                    <View >
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Name" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.username || (this.state.username && !Validator.specialChars(this.state.username))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.nameInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    value={this.state.username}
                                    maxLength={50}
                                    placeholder="Username"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({username: text.trim()})}
                                />
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Name" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.name || !Validator.onlyLetters(this.state.name)) ) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.passwordInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='nameInput'
                                    placeholder="Name"
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    maxLength={50}
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({name: text.trim()})}
                                />
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Lock_open" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.password || (this.state.password && !Validator.specialChars(this.state.password))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.passwordConfInput.focus();
                                    }}
                                    blurOnSubmit={false}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
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
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Lock_close" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.confirmPassword || (this.state.confirmPassword && !Validator.specialChars(this.state.confirmPassword)) || (this.state.confirmPassword && this.state.password != this.state.confirmPassword)) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.email.focus();
                                    }}
                                    blurOnSubmit={false}
                                    ref='passwordConfInput'
                                    maxLength={50}
                                    value={this.state.confirmPassword}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    placeholder="Confirm password" secureTextEntry={true}
                                    onChangeText={(text) => this.setState({confirmPassword: text.trim()})}
                                    style={[LayoutStyle.textInput]}
                                />
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Mail" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.email || !Validator.validateEmail(this.state.email))) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"next"}
                                    onSubmitEditing={(event) => {
                                        this.refs.phone.focus();
                                    }}
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    blurOnSubmit={false}
                                    ref='email'
                                    placeholder="Email"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.setState({email: text.trim()})}
                                />
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField]}>
                            <Icon name="Phone" size={50} color="#575757"/>
                            <View
                                style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.phone) ? {borderColor: 'red'} : {}]}>
                                <TextInput
                                    editable={this.state.editableInput}
                                    returnKeyType={"done"}
                                    onSubmitEditing={this.submitForm.bind(this)}
                                    ref='phone'
                                    onFocus={(event) => {
                                        this._handleFocus(event);
                                    }}
                                    maxLength={14}
                                    value={this.state.phone}
                                    placeholder="Bussines phone number"
                                    style={[LayoutStyle.textInput]}
                                    onChangeText={(text) => this.onChangePhone(text.trim())}
                                />
                            </View>
                        </View>
                        <View style={[LayoutStyle.formField, {paddingTop: 0}]}>
                            <Text style={LayoutStyle.errorText}>{this.state.message}</Text>
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={this.submitForm.bind(this)}
                                style={[LayoutStyle.btn]}>
                                <Text
                                    style={LayoutStyle.btnText}>Join GONG</Text>
                            </TouchableOpacity>
                            <View style={[LayoutStyle.formField, {left: 20}]}>
                                <View style={{
                                    width: 250, alignItems: 'center',
                                }}>
                                    <Text style={[LayoutStyle.notes, {textAlign: 'center'}]}>
                                        By clicking 'Join GONG', I agree that GONG representatives may contact me by
                                        email,
                                        phone,
                                        or SMS (including by automatic tele- phone dialing system) at the email address
                                        and
                                        number
                                        pro- vided. I also agree to GONG's Terms and Conditions and Privacy Policy.
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View >
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
        }
    })
)(SignUpForm);



