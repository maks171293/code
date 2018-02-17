import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native"
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
import Icon from '../assets/svg/svg'
import Button from '../components/Button'
import API from '../services/api'
import LayoutStyle from  '../styles/Layout'
import StringHelper from  '../utilits/StringHelper'
import Validator from '../utilits/validator'
import * as UserActions from '../constants/actionsUser'

//translations
import {strings} from '../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class LoginForm extends Component {

    constructor(props) {

        super(props);

        this.fields = [
            {
                icon: 'mail',
                placeholder: strings['Email'],
                value: 'email',
                specificProps: {
                    keyboardType: 'email-address',
                },
                isValid: text => {
                    if (text === '') {
                        return strings['Email can not be empty!'];
                    } else if (!Validator.validateEmail(text)) {
                        return strings['The email must be a valid email address!']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'lockClose',
                placeholder: strings['Password'],
                value: 'password',
                specificProps: {
                    secureTextEntry: true
                },
                isValid: text => {
                    if (text === '') {
                        return strings['Password can not be empty!'];
                    } else if (!Validator.specialChars(text)) {
                        return strings['Password can contain only letters and numbers.\nNo special characters.']
                    } else {
                        return false;
                    }
                }
            }
        ];

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            errorFields: new Array(this.fields.length).fill(false),
            isLoaderVisible: false
        };

        this.submitForm = this.submitForm.bind(this);
    }

    setFieldProps (item, index, arr) {

        const isElementLast = (index === arr.length-1);

        function nextField () {
            if (isElementLast) {
                this.submitForm();
            } else {
                this[`field-${index + 1}`].focus();
            }
        }

        return {
            ref: c=>this[`field-${index}`]=c,
            underlineColorAndroid: "transparent",
            blurOnSubmit: false,
            autoCapitalize: 'none',
            style: [LayoutStyle.listItemText, styles.listItemText],
            placeholder: item.placeholder,
            returnKeyType: isElementLast ? "done" : "next",
            maxLength: 50,
            ...item.specificProps,
            onSubmitEditing: nextField.bind(this),
            onChangeText: text => this.setState({[item.value]: text}),
        }
    }

    submitForm() {

        dismissKeyboard();
        this.setState({errorMessage: ''});

        let errorArr = new Array(this.fields.length),
            errorMessage;

        /* Validate */
        for (let i = errorArr.length-1; i >= 0; i--) {
            let fieldItem = this.fields[i];
            errorArr[i] = fieldItem.isValid(this.state[fieldItem.value]);
            if (errorArr[i] !== false) {
                errorMessage = errorArr[i];
            }
        }

        /* If errors are found */
        if (errorMessage) {
            this.setState({errorFields: errorArr, errorMessage});
            return;
        }

        this.setState({isLoaderVisible: true, errorFields: errorArr});

        let data = {
            email: this.state.email.toLowerCase(),
            password: StringHelper.md5(this.state.password)
        };

        API.login(data, callback.bind(this));

        function callback (error, result) {
            this.setState({isLoaderVisible: false});

            if (error) {
                this.setState({errorMessage: strings['Server Error']});
                console.log(error);
                return;
            }

            if (result.error) {
                this.setState({errorMessage: result.message});
                console.log(result);
                return;
            }

            //todo change email error on Backend
            if (result.email) {
                this.setState({errorMessage: result.email[0]});
                console.log(result);
                return;
            }

            let saveToStorageData = {
                token: result.api_token,
                user_id: result.user_id,
                driver_id: result.driver_id,
                last_name: result.last_name,
                first_name:  result.first_name,
            };

            /**
             * Save User in Device and Redux storages
             */
            this.props.setStorageUser(saveToStorageData, () => {
                Actions['driverGeolocation']();
            });

        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                <View style={LayoutStyle.contentContainer}>
                    <View style={{alignItems: 'center', paddingVertical: 10}}>
                        <Icon name="name" style={{height: 50}}/>
                    </View>
                    <View style={LayoutStyle.blockWithList}>

                        {this.fields.map( (item, index, arr) =>
                            <View style={[LayoutStyle.listItem]} key={index}>
                                <View style={LayoutStyle.listItemIconWrapper}>
                                    <Icon
                                        name={item.icon}
                                        color={this.state.errorFields[index] ? 'red': null}
                                    />
                                </View>
                                <TextInput
                                    {...this.setFieldProps(item, index, arr)}
                                />
                            </View>
                        )}

                    </View>

                    <View style={{alignItems: 'center', marginVertical: 5}}>
                        <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>
                    </View>

                    <Button
                        onPress={this.submitForm}
                        text={strings.login}
                        style={{marginBottom: 10}}
                    />

                    <View style={{alignItems: 'center'}}>
                        <Text style={LayoutStyle.fontColor}>{strings["Don't have an account?"]}</Text>
                        <TouchableOpacity onPress={Actions['signUp']}>
                            <Text style={[LayoutStyle.errorText]}>{strings["Sign up!"]}</Text>
                        </TouchableOpacity>
                    </View>

                    <OrientationLoadingOverlay
                        visible={this.state.isLoaderVisible}
                        color="white"
                        indicatorSize="large"
                        messageFontSize={24}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    listItemText: {
        color: '#242424',
    }
});

export default connect(
    state => ({
        user: state.user,
        language: state.language
    }),
    dispatch => ({
        setStorageUser: (value, callback) => {
            dispatch({type: UserActions.SET_USER, value, callback});
        }
    })
)(LoginForm);
