import React, {PropTypes, Component}from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback
} from "react-native"
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import LayoutStyle from  '../styles/Layout'
import API from '../services/api'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
import Picker from 'react-native-wheel-picker'
import CheckBox from 'react-native-checkbox'
import Button from '../components/Button'
import Icon from '../assets/svg/svg'
import * as RouteActions from '../constants/actionsRoute'
import * as RegistrationActions from '../constants/actionsRegistration'
import * as UserActions from '../constants/actionsUser'
import * as global from  '../constants/global'

import {TextInputMask} from 'react-native-masked-text'

//translations
import {strings} from '../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class CompanySettings extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoaderVisible: false,

            countriesList: [],
            dropLanguage: 0,

            companyName: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            postcode: '',
            country: -1,

            sameMailingAddress: false,
            mailingStreetAddress: '',
            mailingCity: '',
            mailingPostcode: '',
            mailingCountry: -1,

            errorMessage: '',
        };

        // this.state = {
        //
        //     isLoaderVisible: false,
        //
        //     countriesList: [],
        //     dropLanguage: 0,
        //
        //     companyName: 'dsxcas',
        //     phoneNumber: '123123678678',
        //     streetAddress: 'street1',
        //     city: 'city1',
        //     postcode: 'pscode1',
        //     country: 1,
        //
        //     sameMailingAddress: true,
        //     mailingStreetAddress: '',
        //     mailingCity: '',
        //     mailingPostcode: '',
        //     mailingCountry: -1,
        //
        //     errorMessage: '',
        // };

        this.fields = [
            {
                id: 1,
                title: strings['Company or individual name'],
                icon: 'company',
                value: 'companyName',
            },
            {
                id: 2,
                title: strings['Dispatch phone number'],
                icon: 'phone2',
                value: 'phoneNumber'
            },
            {
                id: 3,
                title: strings['Street address'],
                icon: 'pin',
                value: 'streetAddress'
            },
            {
                id: 4,
                title: strings['City'],
                icon: 'city',
                value: 'city'
            },
            {
                id: 5,
                title: strings['Postcode'],
                icon: 'zip',
                value: 'postcode',
                maxLength: 14
            },
            {
                id: 6,
                title: strings['Country'],
                icon: 'country',
                value: 'country',
                dropList: 1

            },
            {
                id: 7,
                checkbox: {
                    title: strings["Same mailing address"],
                    value: 'sameMailingAddress'
                }
            }
        ];
        this.mailingFields = [
            {
                id: 8,
                title: strings['Mailing address'],
                icon: 'pin',
                value: 'mailingStreetAddress'
            },
            {
                id: 9,
                title: strings['Mailing city'],
                icon: 'city',
                value: 'mailingCity'
            },
            {
                id: 10,
                title: strings['Mailing postcode'],
                icon: 'zip',
                value: 'mailingPostcode'
            },
            {
                id: 11,
                title: strings['Mailing country'],
                icon: 'country',
                value: 'mailingCountry',
                dropList: 2
            }
        ];

        // this.onCountryChange = this.onCountryChange.bind(this);
        // this.onCityChange = this.onCityChange.bind(this);
        // this.onChangePhone = this.onChangePhone.bind(this);
        this.setData = this.setData.bind(this);
        this.setCountries = this.setCountries.bind(this);
        this.focusNextField = this.focusNextField.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount () {
        if (this.props.registration['becomePartnerFields']) {
            this.setState({...this.props.registration['becomePartnerFields']});
        }
    }

    componentDidMount() {
        setTimeout(()=> {

            this.setCountries();

            if (this.props.registrationProcess) {
                this.props.disableDrawer(true);
                // let historyItem = this.props.route.history[this.props.route.history.length - 2];
                // let scene = (historyItem && historyItem.scene);
                // this.props.changeBackButton(
                //     scene,
                //     {registrationProcess: this.props.registrationProcess}
                // );
                return;
            }

            this.setData();
        }, 0);
    }

    setCountries() {
        API.countries({
            token: this.props.user.token,
            // name: this.state.countryName
        }, function (result) {
            // console.log(result, 'countries');
            if (result.error) {
                this.setState({errorMessage: result.message});
                // return 0;
            }
            this.setState({countriesList: result});
        }.bind(this));
    }

    // onCountryChange(location, address) {
    //     this.setState({
    //         country: address,
    //     });
    // }

    // onCityChange(location, address, placeId) {
    //     this.setState({
    //         city: placeId,
    //     });
    // }


    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.route.submit == 'becomePartner') {
    //         this.submitForm();
    //     }
    // }

    setData() {
        this.setState({isLoaderVisible: true});
        API.getDriverSettings({
            token: this.props.user.token,
            // language_code: global.LANGUAGES[this.props.language.index].code,
            // service_id: this.props.service_id
        }, function (result) {
            // console.log(result, 'get settings');
            if ((!result.error) && result.company_name) {
                this.setState({
                    companyName: result.company_name,
                    phoneNumber: result.dispatch_phone,
                    streetAddress: result.street_address,
                    city: result.google_city_id,
                    postcode: result.postcode,
                    country: +result.country_id-1,
                    sameMailingAddress: false,
                    mailingStreetAddress: result.mailing_street_address,
                    mailingCity: result.mailing_city_id,
                    mailingPostcode: result.mailing_postcode,
                    mailingCountry: +result.mailing_country_id-1,
                });
                // this.state.countries.map(function (country, index) {
                //     if (country.id == this.state.countryId) {
                //         this.setState({countryName: country.name});
                //     }
                // }.bind(this));
            }

            // console.log(this.state);
            this.setState({isLoaderVisible: false});
                // return 1;
        }.bind(this));
    }

    /**
     * validate all inputs in submit
     */
    submitForm() {

        this.setState({errorMessage: ''});

        function isMailFieldsEmpty () {
            let s = this.state;
            if (this.state.sameMailingAddress) return false;
            return !(s.mailingStreetAddress && s.mailingCity && s.mailingPostcode && (s.mailingCountry != -1));
        }

        function isGeneralFieldsEmpty () {
            let s = this.state;
            return !(s.companyName && s.phoneNumber && s.streetAddress && s.city && s.postcode && (s.country != -1));
        }

        if (isMailFieldsEmpty.call(this) || isGeneralFieldsEmpty.call(this)) {
            this.setState({errorMessage: strings['Fields can not be empty !']});
            return;
        }


        // if (!this.state.companyName
        //     || !this.state.phoneNumber
        //     || !this.state.streetAddress
        //     || !this.state.city
        //     || !this.state.postcode
        //     || !this.state.country
        // ) {
        //     this.setState({errorMessage: 'Fields can not be empty !'});
        //     return;
        // } else {
        //
        // }

        dismissKeyboard();
        this.setState({errorMessage: ''});

        let mailingData;
        if (this.state.sameMailingAddress) {
            mailingData = {
                mailing_street_address: this.state.streetAddress,
                mailing_city_id: this.state.city,
                mailing_postcode: this.state.postcode,
                mailing_country_id: this.state.country+1+'',
            };
        } else {
            mailingData = {
                mailing_street_address: this.state.mailingStreetAddress,
                mailing_city_id: this.state.mailingCity,
                mailing_postcode: this.state.mailingPostcode,
                mailing_country_id: this.state.mailingCountry+1+'',
            };
        }

        const data = {
            token: this.props.user.token,
            company_name: this.state.companyName,
            dispatch_phone: this.state.phoneNumber,
            street_address: this.state.streetAddress,
            google_city_id: this.state.city,
            postcode: this.state.postcode,
            country_id: this.state.country + 1 + '',
            ...mailingData
        };

        console.log(data);
        console.log(JSON.stringify(data));

        this.setState({isLoaderVisible: true});

        API.setDriverSettings(data, (result) => {
            this.setState({isLoaderVisible: false});

            if (result instanceof Error) {
                this.setState({errorMessage:strings['Server Error']});
                console.log(result);
                return;
            }

            if (result.error) {
                this.setState({errorMessage: strings['something went wrong, try again later']});
                console.log(result);
                return;
            }
            console.log(result);
            // return;

            if (this.props.registrationProcess) {
                this.props.disableDrawer(false);
                this.props.setSignUpFields({
                    companyName: this.state.companyName,
                    phoneNumber: this.state.phoneNumber,
                    streetAddress: this.state.streetAddress,
                    city: this.state.city,
                    postcode: this.state.postcode,
                    country: this.state.country,
                    sameMailingAddress: this.state.sameMailingAddress,
                    mailingStreetAddress: this.state.mailingStreetAddress,
                    mailingCity: this.state.mailingCity,
                    mailingPostcode: this.state.mailingPostcode,
                    mailingCountry: this.state.mailingCountry,
                });
                Actions['questionnaire']({registrationProcess: this.props.registrationProcess});
            } else {
                this.props.disableDrawer(false);
                Actions['driverGeolocation']();
            }

        });
    }

    // saveOptions() {
    //     alert('Options saved');
    // }

    // findData(query) {
    //     if (!query) {
    //         return [];
    //     }
    //     let result = [];
    //     this.state.countries.map(function (country, index) {
    //         if (country.name.trim().toLowerCase().indexOf(query.trim().toLowerCase()) != -1) {
    //             result.push(this.state.countries[index]);
    //         }
    //     }.bind(this));
    //     return result;
    // }

    dropList(index) {
        if (index !==0 ) {
            dismissKeyboard();
        }
        if (index == this.state.dropLanguage) {
            this.setState({dropLanguage: 0});
        } else {
            this.setState({dropLanguage: index});
        }
    }

    focusNextField (field, isNextDropList) {
        let nextField = this.refs[`field-${field.id+1}`];

        if (field.id == 1) {
            nextField = this.refs[`field-${field.id+1}`].refs['$input-text'];
        }

        if (isNextDropList) {
            nextField.props.onPress();
        } else {
            nextField.focus();
        }
    }

    renderFields (fieldsArr) {
        return fieldsArr.map((field, index, fields) => {
            let result;
            if (field.checkbox) {
                result = (
                    <TouchableOpacity
                        onPress={() => {
                            this.dropList(0);
                            this.setState({sameMailingAddress: !this.state.sameMailingAddress});
                        }}
                        key={field.id} style={[LayoutStyle.listItem]}
                    >
                        <View style={{width: 70, alignItems: 'center'}}>
                            <CheckBox
                                checkboxStyle={[{
                                    width: 14,
                                    height: 14,
                                }, (!this.state.license) ? {borderColor: 'red'} : {}]}
                                label=''
                                containerStyle={{width: 15, height: 20, paddingTop: 5}}
                                checked={this.state.sameMailingAddress}
                                onChange={(checked) => this.setState({sameMailingAddress: !this.state.sameMailingAddress})}
                            />
                        </View>
                        <Text style={{color: '#242424'}}>{field.checkbox.title}</Text>
                    </TouchableOpacity>
                );
            } else if (typeof field.dropList !== 'undefined') {
                result = (
                    <View  key={field.id}>
                        <TouchableOpacity
                            style={LayoutStyle.listItem}
                            onPress={() => {

                                if (!(this.state[field.value] === '')) {
                                    this.dropList(field.dropList)
                                }
                            }}
                            ref={`field-${field.id}`}
                        >
                            <View style={{width: 70, alignItems: 'center'}}>
                                <Icon
                                    name={field.icon}
                                    //color={ (this.state.message && (this.state.errorUserName || !this.state.username && !Validator.specialChars(this.state.username))) ? 'red' : null}
                                />
                            </View>

                            <Text style={[LayoutStyle.listItemText, {color: '#242424'}]}>
                                {(!this.state.countriesList.length || this.state[field.value] === -1) ?
                                    strings['Select country']
                                    :
                                    this.state.countriesList[this.state[field.value]].name
                                }
                            </Text>
                        </TouchableOpacity>

                        {(this.state.dropLanguage == field.dropList) && (
                            <View style={LayoutStyle.dropList}>
                                <Picker
                                    style={{flex: 1}}
                                    selectedValue={this.state[field.value]}
                                    itemStyle={{color: "#000000", fontSize: 16}}
                                    onValueChange={(index) => this.setState({[field.value]: index})}
                                >
                                    {this.state.countriesList.map((value, i) => (
                                        <Picker.Item label={value.name} value={i} key={value.id}/>
                                    ))}
                                </Picker>
                            </View>
                        )}
                    </View>
                );

            } else if (field.id == 2) {
                result = (
                    <View  key={field.id} style={[LayoutStyle.listItem]}>
                        <View style={{width: 70, alignItems: 'center'}}>
                            <Icon
                                name={field.icon}
                                //color={ (this.state.message && (this.state.errorUserName || !this.state.username && !Validator.specialChars(this.state.username))) ? 'red' : null}
                            />
                        </View>
                        <TextInputMask
                            focus={function () {
                                console.log('aaa');
                                //this.focus()
                            }}
                            underlineColorAndroid={"transparent"}
                            returnKeyType={"next"}
                            ref={`field-${field.id}`}
                            type={'cel-phone'}
                            onSubmitEditing={() => {
                                const isNextDropList = !!fields[index+1].dropList
                                this.focusNextField(field, isNextDropList);
                            }}
                            onFocus={(event) => {
                                this.dropList(0);
                                this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);

                            }}
                            options={{
                                dddMask: '+99 9999 999999'
                            }}
                            minLength={15}
                            maxLength={15}
                            value={this.state[field.value]}
                            placeholder={field.title}
                            onChangeText={(text) => this.setState({
                                [field.value]: text.trim(),
                            })}
                            editable={false}
                            disabled={true}
                            style={[LayoutStyle.listItemText, {color: 'grey'}]}
                        />
                    </View>
                );
            }
            else if(field.id === 1){
              result = (
                  <View  key={field.id} style={[LayoutStyle.listItem]}>
                      <View style={{width: 70, alignItems: 'center'}}>
                          <Icon
                              name={field.icon}
                              //color={ (this.state.message && (this.state.errorUserName || !this.state.username && !Validator.specialChars(this.state.username))) ? 'red' : null}
                          />
                      </View>
                      <TextInput
                          underlineColorAndroid={'transparent'}
                          ref={`field-${field.id}`}
                          returnKeyType={"next"}
                          onSubmitEditing={() => {
                              //console.log(field);
                              const isNextDropList = !!fields[index+1].dropList;
                              this.focusNextField(field, isNextDropList);
                          }}
                          blurOnSubmit={false}
                          onFocus={(event) => {
                              this.dropList(0);
                              this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);
                          }}
                          value={this.state[field.value]}
                          maxLength={field.maxLength ||50}
                          placeholder={field.title}
                          onChangeText={(text) => this.setState({
                              [field.value]: text,
                          })}
                          editable={false}
                          style={[LayoutStyle.listItemText, {color: 'grey'}]}
                      />

                  </View>
              )
            } else {
                result = (
                    <View  key={field.id} style={[LayoutStyle.listItem]}>
                        <View style={{width: 70, alignItems: 'center'}}>
                            <Icon
                                name={field.icon}
                                //color={ (this.state.message && (this.state.errorUserName || !this.state.username && !Validator.specialChars(this.state.username))) ? 'red' : null}
                            />
                        </View>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            ref={`field-${field.id}`}
                            returnKeyType={"next"}
                            onSubmitEditing={() => {
                                //console.log(field);
                                const isNextDropList = !!fields[index+1].dropList;
                                this.focusNextField(field, isNextDropList);
                            }}
                            blurOnSubmit={false}
                            onFocus={(event) => {
                                this.dropList(0);
                                this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);
                            }}
                            value={this.state[field.value]}
                            maxLength={field.maxLength ||50}
                            placeholder={field.title}
                            onChangeText={(text) => this.setState({
                                [field.value]: text,
                            })}
                            style={[LayoutStyle.listItemText, {color: '#242424'}]}
                        />

                    </View>
                )
            }
            return result;
        })
    }

    render() {
        return (
            <KeyboardAwareScrollView
                ref="keyboardAwareScrollView"
                enableAutoAutomaticScroll={false}
                automaticallyAdjustContentInsets={false}
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                keyboardShouldPersistTaps={'always'}
            >
                <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Text style={LayoutStyle.h1}>{strings["Register as partner"]}</Text>

                            <View style={LayoutStyle.blockWithList}>
                                {this.renderFields(this.fields)}
                                {!this.state.sameMailingAddress && this.renderFields(this.mailingFields)}
                            </View>
                        </View>

                        <View style={[styles.errorWrapper, this.state.errorMessage && {marginTop:5}]}>
                            <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>
                        </View>

                        <Button
                            onPress={()=>this.submitForm()}
                            text={strings["Confirm"]}
                            style={{marginVertical: 10}}
                        />

                    </View>
                </TouchableWithoutFeedback>
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

const styles = StyleSheet.create({
    errorWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
});

export default connect(
    state => ( {
        registration: state.registration,
        route: state.routes,
        user: state.user,
        language: state.language
    }),
    dispatch => ({
        setSignUpFields: (data) => {
            dispatch({type: RegistrationActions.UPDATE_PAGE_FIELDS, page: 'becomePartnerFields', data});
        },
        // changeBackButton: (scene, props) => {
        //     dispatch({
        //         type: RouteActions.CHANGE_BACK_BUTTON,
        //         scene,
        //         props
        //     })
        // },
        disableDrawer: (status) => {
            dispatch({
                type: RouteActions.DISABLE_DRAWER,
                status: status
            });
        },
    })
)
(CompanySettings);
