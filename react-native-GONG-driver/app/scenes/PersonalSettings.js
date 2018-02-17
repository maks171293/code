import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from "react-native"
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
import Picker from 'react-native-wheel-picker'
import API from '../services/api'
import Validator from '../utilits/validator'
import MaskedTextInput from '../components/MaskedTextInput'
import Button from '../components/Button'
import Icon from '../assets/svg/svg'
import LayoutStyle from  '../styles/Layout'
import StringHelper from '../utilits/StringHelper'
import * as LanguageActions from '../constants/actionsLanguage'
import * as UserActions from '../constants/actionsUser'
import * as global from  '../constants/global'

//translations
import {strings} from '../utilits/localStrings.js';
import {LANGUAGES} from '../constants/global';


const dismissKeyboard = require('dismissKeyboard');

class PersonalSettings extends Component {

    constructor(props) {

        super(props);


        this.fields = [
            {
                icon: 'name',
                placeholder: 'First name',
                value: 'firstName',
                isValid: text => {
                    if (text === '') {
                        return strings['First name can not be empty!'];
                    } else if (!Validator.onlyLetters(text)) {
                        return strings['First name can contain only letters and numbers.\nNo special characters.']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'username',
                placeholder: strings['Last name'],
                value: 'lastName',
                isValid: text => {
                    if (text === '') {
                        return strings['Last name can not be empty!'];
                    } else if (!Validator.onlyLetters(text)) {
                        return strings['Last name can contain only letters and numbers.\nNo special characters.']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'lockOpen',
                placeholder: () => (this.state.activePasswordField ? '' : "●●●●●●"),
                additionalOnFocusAction: () => this.setState({activePasswordField: true}),
                additionalOnBlurAction: () => this.setState({activePasswordField: false}),
                value: 'password',
                specificProps: {
                    secureTextEntry: true
                },
                isValid: text => {
                    if (text === '') {
                        return false;
                    } else if (!Validator.specialChars(text)) {
                        return strings['Password can contain only letters and numbers.\nNo special characters.']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'lockClose',
                toggleStateOnAction: 'activeConfirmPasswordField',
                placeholder: () => (this.state.activeConfirmPasswordField ? '' : "●●●●●●"),
                additionalOnFocusAction: () => {this.setState({activeConfirmPasswordField: true})},
                additionalOnBlurAction: () => this.setState({activeConfirmPasswordField: false}),
                value: 'confirmPassword',
                specificProps: {
                    secureTextEntry: true
                },
                isValid: text => {
                    if (this.state.password !== text) {
                        return strings['Confirm password does not match!']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'language',
                placeholder: strings['Select Language'],
                value: 'languageIndex',
                toggler: 'dropLanguage',
                dropDown: true,
                isValid: id => {
                    if (typeof global.LANGUAGES[id] == 'undefined') {
                        return strings['Can not find chosen language'];
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'mail',
                placeholder: strings['Email'],
                value: 'email',
                specificProps: {
                    keyboardType: 'email-address',
                    maxLength: 100,
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
                icon: 'phone',
                placeholder: strings['Phone number'],
                value: 'phone',
                maskedText: true,
                specificProps: {
                    keyboardType: 'numeric',
                    maxLength: 15,
                },
                isValid: text => {
                    if (text === '') {
                        return strings['Phone number can not be empty!'];
                    } else if (text.length !== 12) {
                        return strings['Phone must be 12 digits long']
                    } else {
                        return false;
                    }
                }
            },
            // {
            //     icon: 'licensePlate',
            //     placeholder: 'Vehicle license plate',
            //     value: 'licensePlate',
            //     specificProps: {
            //         maxLength: 15,
            //     },
            //     isValid: text => {
            //         if (text === '') {
            //             return 'License plate can not be empty!';
            //         } else if (text.length > 14) {
            //             return 'License plate must be less than 14 symbols long'
            //         } else {
            //             return false;
            //         }
            //     }
            // }
        ];

        this.state = {

            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            languageIndex: this.props.language.index,
            email: '',
            phone: '',
            licensePlate: '',

            activePasswordField: false,
            activeConfirmPasswordField: false,

            errorMessage: '',
            errorFields: new Array(this.fields.length+1).fill(false),

            dropLanguage: false,
            isDataLoaded: false,
            isLoaderVisible: true,

        };



        this.submitForm = this.submitForm.bind(this);

    }

    componentDidMount () {
        API.getDriver(this.props.user.token, result => {
            this.setState({
                isDataLoaded: true,
                isLoaderVisible: false,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                phone: result.phone,
            });

        });
    }

    renderField (item, index, arr) {

        let element,
            input;

        if (item.dropDown) {
            element = (
                <View key={index}>
                    <TouchableOpacity
                        ref={c=>this[`field-${index}`]=c}
                        style={LayoutStyle.listItem}
                        onPress={() => {
                            dismissKeyboard();
                            this.setState(prevState => ({[item.toggler]: !prevState[item.toggler]}));
                        }}
                    >
                        <View style={LayoutStyle.listItemIconWrapper}>
                            <Icon
                                name={item.icon}
                                color={this.state.errorFields[index] ? 'red' : null}
                            />
                        </View>
                        <Text style={[LayoutStyle.listItemText, LayoutStyle.fontColor]}>
                            {global.LANGUAGES[this.state[item.value]].label || strings['Select Language']}
                        </Text>
                    </TouchableOpacity>
                    {this.state[item.toggler] &&
                    <View style={LayoutStyle.dropList}>
                        <Picker
                            style={{flex: 1}}
                            selectedValue={this.state[item.value]}
                            itemStyle={{color: "#000000", fontSize: 16}}
                            onValueChange={i => this.setState({[item.value]: i})}
                        >
                            {global.LANGUAGES.map((value, i) => (
                                <Picker.Item
                                    key={value.code}
                                    label={value.label}
                                    value={i}
                                />
                            ))}
                        </Picker>
                    </View>
                    }
                </View>
            );
        } else {

            if (item.maskedText) {
                input = <MaskedTextInput
                    mask={'+xx xxxx xxxxxx'}
                    {...setInputFieldProps.call(this, true)}
                />
            } else {
                input = <TextInput
                    {...setInputFieldProps.call(this)}
                />
            }

            element = (
                <View style={[LayoutStyle.listItem]} key={index}>
                    <View style={LayoutStyle.listItemIconWrapper}>
                        <Icon
                            name={item.icon}
                            color={this.state.errorFields[index] ? 'red' : null}
                        />
                    </View>
                    {input}
                </View>
            );

        }

        return element;

        function setInputFieldProps (isMaskedInput = false) {
            const isElementLast = (index === arr.length-1);

            function nextField () {
                if (isElementLast) {
                    dismissKeyboard();
                    this.submitForm();
                } else {
                    let nextItem = this[`field-${index + 1}`];
                    if (arr[index+1].dropDown) {
                        nextItem.props.onPress();
                    } else {
                        nextItem.focus();
                    }
                }
            }

            let props = {
                ref: c=>this[`field-${index}`]=c,
                underlineColorAndroid: "transparent",
                blurOnSubmit: false,
                autoCapitalize: 'none',
                style: [LayoutStyle.listItemText, LayoutStyle.fontColor],
                placeholder: typeof item.placeholder == 'function' ? item.placeholder() : item.placeholder,
                returnKeyType: isElementLast ? "done" : "next",
                maxLength: 50,
                ...item.specificProps,
                onSubmitEditing: nextField.bind(this),
                value: this.state[item.value],
            };

            if (isElementLast && (Platform.OS === 'ios')) {
                props.onFocus = () => {
                    this.setState({dropLanguage: false});
                    this.keyboardListener = Keyboard.addListener('keyboardWillShow', (e) => {
                        let newSize = e.endCoordinates.height;
                        this._scrollView.scrollToPosition(0, newSize, true)
                    });
                };
                props.onBlur = () => {
                    this.keyboardListener && this.keyboardListener.remove();
                }
            } else {
                props.onFocus = (e) => {
                    item.additionalOnFocusAction && item.additionalOnFocusAction();
                    this.setState({dropLanguage: false});
                    this._scrollView.scrollToFocusedInput(e.target, 100)
                };
                props.onBlur= (e) => {
                    item.additionalOnBlurAction && item.additionalOnBlurAction();
                };
            }

            if (isMaskedInput) {
                props.onChangeText = (text) => {
                    clearTimeout(this.fieldInputTimeout);
                    this.fieldInputTimeout = setTimeout(() => {
                        this.setState({[item.value]: text});
                    }, 16);
                }
            } else {
                props.onChangeText = (text) => {
                    this.setState({[item.value]: text});
                }
            }

            return props;
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

        let password = (this.state.password) ? StringHelper.md5(this.state.password) : null;

        this.setState({
            password: '',
            confirmPassword: ''
        });

        //todo make password required
        let data = {
            token: this.props.user.token,
            id: this.props.user.user_id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password
        };

        //todo make refactor of error handling
        API.updateDriver(data, callback.bind(this));

        function callback (error, result) {
            this.setState({isLoaderVisible: false});
            console.log(result);

            if (error) {
                this.setState({errorMessage: strings['Server Error']});
                console.log(error);
                return;
            }

            if (result.firstName) {
                this.setState({errorMessage: result.firstName[0]});
                return 0;
            }
            else if (result.lastName) {
                this.setState({errorMessage: result.lastName[0]});
                return 0;
            }
            else if (result.email) {
                this.setState({errorMessage: result.email[0]});
                return 0;
            }
            else if (result.phone) {
                this.setState({errorMessage: result.phone[0]});
                return 0;
            }
            else if (result.error) {
                this.setState({errorMessage: result.message});
                return 0;
            }

            this.props.setStorageLanguage({index: this.state.languageIndex}, (res) => {
                console.log('language changed', res);
                console.log('state index', this.state);
                strings.setLanguage(LANGUAGES[this.state.languageIndex].code);
                console.log('strings.getLang', strings.getLanguage());
            });

            let data = {
                last_name: this.state.lastName,
                first_name:  this.state.firstName,
            };

            console.log(data);

            /**
             * Update User in Device and Redux storages
             */
            this.props.updateStorageUser(data, () =>{
                Actions['driverGeolocation']();
            });
        }
    }

    render() {
        return (
            <KeyboardAwareScrollView
                ref={el => this._scrollView = el}
                automaticallyAdjustContentInsets={false}
                enableAutoAutomaticScroll={false}
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                keyboardShouldPersistTaps={'always'}
            >
                {this.state.isDataLoaded && (
                    <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                        <View style={{flex: 1}}>
                            <View style={{flex: 1}}>
                                <Text style={LayoutStyle.h1}>{strings["Personal settings"]}</Text>
                                <View style={LayoutStyle.blockWithList}>
                                    {this.fields.map(this.renderField.bind(this))}
                                </View>
                            </View>

                            <View style={{justifyContent: 'center'}}>
                                <Text style={LayoutStyle.errorText}>
                                    {this.state.errorMessage}
                                </Text>
                            </View>

                            <Button
                                onPress={this.submitForm}
                                text={strings["Confirm"]}
                                style={{marginVertical: 10}}
                            />

                        </View>
                    </TouchableWithoutFeedback>
                )}
                <OrientationLoadingOverlay
                    visible={this.state.isLoaderVisible}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={24}
                />
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    state => ({
        language: state.language,
        user: state.user,
    }),
    dispatch => ({
        setStorageLanguage: (value, callback) => {
            dispatch({type: LanguageActions.SET_LANGUAGE, value, callback});
        },
        updateStorageUser: (value, callback) => {
            dispatch({type: UserActions.UPDATE_USER, value, callback});
        }
    })
)(PersonalSettings);
