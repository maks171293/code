import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native"
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import CheckBox from 'react-native-checkbox'
import PopupDialog from 'react-native-popup-dialog'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay'
import LayoutStyle from  '../styles/Layout'
import {width} from "../styles/Variables"
import API from '../services/api'
import Validator from '../utilits/validator'
import Button from '../components/Button'
import Icon from '../assets/svg/svg'
import MaskedTextInput from '../components/MaskedTextInput'
import StringHelper from '../utilits/StringHelper'
import * as UserActions from '../constants/actionsUser'
//Translations
import {strings} from '../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class SignUpForm extends Component {

    constructor(props) {

        super(props);

        this.fields = [
            {
                icon: 'name',
                placeholder: strings['First name'],
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
                        return strings['Password can not be empty!'];
                    } else if (!Validator.specialChars(text)) {
                        return strings['Password can contain only letters and numbers.\nNo special characters.']
                    } else {
                        return false;
                    }
                }
            },
            {
                icon: 'lockClose',
                placeholder: () => (this.state.activeConfirmPasswordField ? '' : "●●●●●●"),
                additionalOnFocusAction: () => {this.setState({activeConfirmPasswordField: true})},
                additionalOnBlurAction: () => this.setState({activeConfirmPasswordField: false}),
                value: 'confirmPassword',
                specificProps: {
                    secureTextEntry: true
                },
                isValid: text => {
                    if (text === '') {
                        return strings['Confirm password can not be empty!'];
                    } else if (this.state.password !== text) {
                        return strings['Confirm password does not match!']
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
                    onChangeText: this._onChangeMaskedText.bind(this),
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
            {
                icon: 'licensePlate',
                placeholder: strings['Vehicle license plate'],
                value: 'licensePlate',
                specificProps: {
                    maxLength: 15,
                },
                isValid: text => {
                    if (text === '') {
                        return strings['License plate can not be empty!'];
                    } else if (text.length > 14) {
                        return strings['License plate must be less than 14 symbols long']
                    } else {
                        return false;
                    }
                }
            }
        ];

        this.state = {

            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
            licensePlate: '',

            activePasswordField: false,
            activeConfirmPasswordField: false,

            errorMessage: '',
            errorFields: new Array(this.fields.length+1).fill(false),

            isLicenseConfirmed: false,
            isLoaderVisible: false
        };
        // this.state = {
        //
        //     firstName: '312',
        //     lastName: 'ssd',
        //     password: '123123',
        //     confirmPassword: '123123',
        //     email: `dsdsa${Date.now().toString().substr(-5)}@dasa.wed`,
        //     phone: '098321876567',
        //     licensePlate: '231ds213',
        //
        //     activePasswordField: false,
        //     activeConfirmPasswordField: false,
        //
        //     errorMessage: '',
        //     errorFields: new Array(this.fields.length+1).fill(false),
        //
        //     isLicenseConfirmed: true,
        //     isLoaderVisible: false
        // };

        this.submitForm = this.submitForm.bind(this);

    }

    setFieldProps (item, index, arr) {

        const isElementLast = (index === arr.length-1);

        function nextField () {
            if (isElementLast) {
                dismissKeyboard();
                if (this.state.isLicenseConfirmed) {
                    this.submitForm();
                } else {
                    this.popupDialog.show();
                }
            } else {
                this[`field-${index + 1}`].focus();
            }
        }

        return {
            ref: c=>this[`field-${index}`]=c,
            underlineColorAndroid: "transparent",
            blurOnSubmit: false,
            autoCapitalize: 'none',
            style: [LayoutStyle.listItemText, LayoutStyle.fontColor],
            placeholder: typeof item.placeholder == 'function' ? item.placeholder() : item.placeholder,
            returnKeyType: isElementLast ? "done" : "next",
            maxLength: 50,
            value: this.state[item.value],
            onSubmitEditing: nextField.bind(this),
            onFocus: (e) => {
                item.additionalOnFocusAction && item.additionalOnFocusAction();
                this._scrollView.scrollToFocusedInput(e.target, 100)
            },
            onBlur: () => {
                item.additionalOnBlurAction && item.additionalOnBlurAction();
            },
            onChangeText: text => this.setState({[item.value]: text}),
            ...item.specificProps,
        };

    }

    _onChangeMaskedText (text) {
        clearTimeout(this.fieldInputTimeout);
        this.fieldInputTimeout = setTimeout(() => {
            this.setState({phone: text});
        }, 16);
    }

    submitForm() {

        dismissKeyboard();
        this.setState({errorMessage: ''});

        let errorArr = new Array(this.fields.length+1),
            errorMessage;

        /* Validate */
        for (let i = errorArr.length-1; i >= 0; i--) {
            let fieldItem = this.fields[i];
            if (typeof fieldItem !== 'undefined') {
                /* For items from fields list */
                errorArr[i] = fieldItem.isValid(this.state[fieldItem.value]);
            } else {
                /* For Checkbox */
                errorArr[i] = !this.state.isLicenseConfirmed && strings['Please, confirm license agreement!'];
            }

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
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            password: StringHelper.md5(this.state.password),
            email: this.state.email.toLowerCase(),
            phone: this.state.phone,
            vehicle_license_plate: this.state.licensePlate,
        };

        API.signUp(data, callback.bind(this));

        function callback (error, result) {
            this.setState({isLoaderVisible: false});
            console.log(result);

            if (error) {
                this.setState({errorMessage: strings['Server Error']});
                console.log(error);
                return;
            }

            if (result.error) {
                //todo refactor comparison below
                if (result.message == strings["Email already exist!"]) {
                    let emailField = this.fields.findIndex((i)=>i.value==='email');
                    errorArr[emailField] = result.message;
                    this.setState({errorMessage: result.message, errorFields: errorArr});
                } else {
                    this.setState({errorMessage: result.message});
                }
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
                Actions['becomePartner']({registrationProcess: true});
            });
        }
    }

    render() {
        let checkboxError = this.state.errorFields[this.state.errorFields.length-1];
        return (
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView
                    ref={el => this._scrollView = el}
                    automaticallyAdjustContentInsets={false}
                    enableAutoAutomaticScroll={true}
                    style={LayoutStyle.contentContainer}
                    contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                    keyboardShouldPersistTaps={'always'}
                >
                    <TouchableWithoutFeedback onPress={dismissKeyboard}>
                        <View style={{flex: 1}}>
                            <View style={{flex: 1}}>
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
                                            {item.maskedText ?
                                                <MaskedTextInput
                                                    mask={'+xx xxxx xxxxxx'}
                                                    {...this.setFieldProps(item, index, arr)}
                                                />
                                                :
                                                <TextInput
                                                    {...this.setFieldProps(item, index, arr)}
                                                />
                                            }
                                        </View>
                                    )}

                                    <View style={styles.checkboxWrapper}>
                                        <View style={LayoutStyle.listItemIconWrapper}>
                                            <CheckBox
                                                checkboxStyle={[
                                                    styles.checkbox,
                                                    checkboxError && {borderColor: 'red', borderWidth: 2}
                                                ]}
                                                label=''
                                                containerStyle={{marginBottom: 0}}
                                                checked={this.state.isLicenseConfirmed}
                                                onChange={checked =>this.setState({isLicenseConfirmed: !checked})}
                                            />
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Text
                                                style={[
                                                    LayoutStyle.fontColor,
                                                    checkboxError && {color: 'red'}
                                                ]}
                                            >
                                                {strings['I accept ']}
                                            </Text>
                                            <TouchableOpacity onPress={() => this.popupDialog.show()}>
                                                <Text
                                                    style={[
                                                        LayoutStyle.fontColor,
                                                        {textDecorationLine: 'underline'},
                                                        checkboxError && {color: 'red'}
                                                    ]}
                                                >
                                                    {strings['license agreement']}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            <View style={{justifyContent: 'center'}}>
                                <Text style={[LayoutStyle.errorText]}>{this.state.errorMessage}</Text>
                            </View>
                            <Text style={{color: '#949494', textAlign: 'center', fontSize: 8}}>
                                {strings["if you want to change settings – please contact gong admin"]}
                            </Text>
                            <Button
                                onPress={this.submitForm}
                                text={strings["Join GONG"]}
                                style={{marginVertical: 10}}
                            />

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAwareScrollView>
                <PopupDialog
                    dialogTitle={null}
                    width={width - 20}
                    height={300}
                    dialogStyle={{marginTop: -35}}
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                >
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 18, color: '#d20d1c', marginTop: 20, marginBottom: 15, textAlign: 'center'}}>{strings["License agreement"]}</Text>
                        <ScrollView
                            style={{flex: 1, paddingHorizontal: 10}}
                        >
                            <Text style={LayoutStyle.aboutUsText}>The terms and conditions stated
                                                herein (collectively,
                                                this &quot;Agreement&quot;) constitute a legal

                                                agreement between you and GONG Technologies Ltd, Inc. (“GONG” or the &quot;Company&quot;).

                                                By using or receiving any services, apps, websites or other products, services or

                                                information supplied to you by the Company (collectively, the &quot;Service&quot;), and
                                                downloading,

                                                installing or using any associated software or apps supplied by the Company which

                                                purpose is to enable you to use the Service (collectively, the &quot;Software&quot;), you
                                                hereby

                                                expressly acknowledge and agree to be bound by the terms and conditions of this

                                                Agreement, and any future amendments and additions to this Agreement as published

                                                from time to time on the Company website or through the other Services.</Text>
                            <Text style={LayoutStyle.aboutUsText}>The Company reserves the right to modify the terms and
                                                conditions of this Agreement or

                                                its policies relating to the Service or Software at any time, effective upon posting of an

                                                updated version of this Agreement on the Service or Software. You are responsible for

                                                regularly reviewing this Agreement. Continued use of the Service or Software after any

                                                such changes shall constitute your consent to such changes. If you require any more

                                                information or have any questions about our Terms and Conditions, please feel free to

                                                contact us by email at support@gongforhelp.com</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>THE COMPANY DOES NOT PROVIDE ROADSIDE ASSISTANCE, TOWING
                                                SERVICES

                                                OR OTHER SERVICES FROM THIRD PARTIES IN OTHER CATEGORIES

                                                (COLLECTIVELY, THE “THIRD PARTY SERVICES”). THE COMPANY IS A DIRECTORY

                                                SERVICE HELPING USERS FIND THIRD PARTIES TO PROVIDE SUCH THIRD PARTY

                                                SERVICES (THE “THIRD PARTY SERVICE PROVIDERS”). IT IS UP TO THE THIRD

                                                PARTY SERVICE PROVIDER TO OFFER THEIR THIRD PARTY SERVICES, WHICH

                                                MAY BE SCHEDULED THROUGH USE OF THE COMPANY SOFTWARE OR SERVICE.

                                                THE COMPANY OFFERS INFORMATION AND A METHOD TO OBTAIN SUCH THIRD

                                                PARTY SERVICES FROM THIRD PARTY SERVICE PROVIDERS, BUT DOES NOT, AND

                                                DOES NOT INTEND TO, PROVIDE THIRD PARTY SERVICES OR ACT IN ANY WAY AS

                                                A THIRD PARTY SERVICE PROVIDER, AND HAS NO RESPONSIBILITY OR LIABILITY

                                                FOR ANY THIRD PARTY SERVICES PROVIDED TO (OR FAILED TO BE PROVIDED)

                                                NOR FOR THE ACTIONS OR INACTIONS OF ANY THIRD PARTY SERVICE

                                                PROVIDERS. ANY INDIVIDUALS WHO PROVIDE ANY THIRD PARTY SERVICES ARE

                                                NOT EMPLOYEES NOR CONTRACTORS OF COMPANY BUT RATHER OF THIRD

                                                PARTY SERVICE PROVIDERS, AND COMPANY IS NOT RESPONSIBLE FOR THEIR

                                                ACTIONS OR INACTIONS.

                                                GONG is Only a Venue</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Service is a communications platform for enabling
                                                the connection between individuals

                                                seeking to obtain Third Party Services and/or individuals or companies seeking to provide

                                                Third Party Services. The Company does not guarantee or warrant, and makes no

                                                representations regarding, the reliability, quality or suitability of such Third Party
                                                Service

                                                Providers. When interacting with Third Party Service Providers you should exercise

                                                caution and common sense to protect your personal safety and property, just as you would

                                                when interacting with other persons whom you don&#39;t know. By using the Service, you

                                                agree to hold the Company free from the responsibility for any liability or damage that

                                                might arise out of the transactions involved. NEITHER THE COMPANY NOR ITS

                                                AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER

                                                ONLINE OR OFFLINE, OF ANY USER OF THE SERVICE OR THIRD PARTY SERVICES

                                                NOR ANY THIRD PARTY SERVICE PROVIDERS. THE COMPANY AND ITS AFFILIATES

                                                AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE

                                                ARISING IN CONNECTION WITH YOUR USE OF THE SERVICE OR THE THIRD

                                                PARTY SERVICES.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Representations and Warranties</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>
                                By using the Software or Service, you expressly represent and warrant that you are legally

                                entitled to enter this Agreement. If you reside in a jurisdiction which restricts the use of
                                the

                                Service because of age, or restricts the ability to enter into agreements such as this one

                                due to age, you must abide by such age limits or you must not use the Software and

                                Service. Without limiting the foregoing, the Service and Software is not available to

                                children (persons under the age of 18) or others who are not capable of entering into

                                binding contracts, unless they have consent and permission of a parent or guardian. By

                                using the Software or Service, you represent and warrant that you are at least 18 years

                                old, or have the consent of a parent or guardian, and/or are otherwise capable of entering

                                into binding contracts. By using the Software or the Service, you represent and warrant

                                that you have the right, authority and capacity to enter into this Agreement and to abide by

                                the terms and conditions of this Agreement. Your participation in using the Service and/or

                                Software is for your sole, personal use. You may not authorize others to use your user

                                status, and you may not assign or otherwise transfer your user account to any other

                                person or entity. When using the Software or Service you agree to comply with all

                                applicable laws from the country, state and city in which you are present while using the

                                Software or Service.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>You may only access the Service using authorized means.
                                                It is your responsibility to check

                                                to ensure you download the correct Software for your device. The Company is not liable if

                                                you do not have a compatible handset or if you have downloaded the wrong version of the

                                                Software for your handset.</Text>

                            <Text style={LayoutStyle.aboutUsText}>By using the Software or the Service, you agree that:</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will only use the Service or Software for lawful
                                                purposes; you will not use the Service

                                                for sending or storing any unlawful material or for fraudulent purposes.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not use the Service or Software to cause
                                                nuisance, annoyance or inconvenience.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not impair the proper operation of the
                                                network.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not try to harm the Service or Software in any
                                                way whatsoever.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not copy, or distribute the Software or other
                                                content without written permission

                                                from the Company.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will only use the Software and Service for your own
                                                use and will not resell it to a third

                                                party.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will keep secure and confidential your account
                                                password or any identification

                                                provided to you which allows access to the Service.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will provide us with whatever proof of identity the
                                                Company may reasonably request.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will only use an access point or data account which
                                                you are authorized to use.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not portray Company or its affiliates in a
                                                negative manner or otherwise portray its

                                                services in a false, misleading, derogatory or offensive manner.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• When requesting Third Party Services by SMS, you opt-in to
                                                receive text messages from

                                                the Company, and acknowledge that standard messaging charges from your mobile

                                                network service provider may apply, and you represent and warrant that the number

                                                provided is your own cell phone number.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not post or transmit any photograph or likeness
                                                of another person without that

                                                person&#39;s consent, if and to the extent necessary under applicable laws.</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not post, publish, transmit, reproduce,
                                                distribute or in any way exploit any

                                                information, software or other material obtained through the Services for commercial

                                                purposes (other than as expressly permitted by the Service and by the provider of such

                                                information, software or other material).</Text>

                            <Text style={LayoutStyle.aboutUsText}>• You will not upload, post, publish, transmit, reproduce,
                                                or distribute in any way,

                                                information, software or other material obtained through the Services which is protected by

                                                copyright, or other proprietary right, or derivative works with respect thereto, without

                                                obtaining permission of the copyright owner or rightholder, or which otherwise violates or

                                                infringes the rights of others, including without limitation, patent, trademark, trade
                                                secret,

                                                copyright, publicity, or other proprietary rights</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>License Grant &amp; Restrictions</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Company hereby grants you a non-exclusive,
                                                non-transferable, right to use the

                                                Software and Service, solely for your own personal, non-commercial purposes, subject to

                                                the terms and conditions of this Agreement. All rights not expressly granted to you are

                                                reserved by the Company and its licensors.

                                                You shall not (i) license, sublicense, sell, resell, transfer, assign, distribute or
                                                otherwise

                                                commercially exploit or make available to any third party the Service or the Software in any

                                                way; (ii) modify or make derivative works based upon the Service or the Software; (iii)

                                                create Internet &quot;links&quot; to the Service or &quot;frame&quot; or &quot;mirror&quot;
                                                any Software on any other

                                                server or wireless or Internet-based device; (iv) reverse engineer the Software; (v) access

                                                the Software or Services in order to (a) build a competitive product or service, (b) build a

                                                product using similar ideas, features, functions or graphics of the Service or Software, or

                                                (c) copy any ideas, features, functions or graphics of the Service or Software, or (vi)

                                                launch an automated program or script, including, but not limited to, web spiders, web

                                                crawlers, web robots, web ants, web indexers, bots, viruses or worms, or any program

                                                which may make multiple server requests per second, or unduly burdens or hinders the

                                                operation and/or performance of the Service or Software.

                                                You shall not: (i) send spam or otherwise duplicative or unsolicited messages in violation
                                                of

                                                applicable laws; (ii) send or store infringing, obscene, threatening, libelous, or otherwise

                                                unlawful or tortious material, including material harmful to children or violative of third
                                                party

                                                privacy rights; (iii) send or store material containing software viruses, worms, Trojan

                                                horses or other harmful computer code, files, scripts, agents or programs; (iv) interfere

                                                with or disrupt the integrity or performance of the Software or Service or the data

                                                contained therein; or (v) attempt to gain unauthorized access to the Software or Service or

                                                its related systems or networks.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Fees and Payment Terms</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Company or the Third Party Service provider may charge
                                                you, on behalf of the Third Party

                                                Service Provider for the Third Party Services provided to you by the Third Party Service

                                                Provider. You agree that you will pay for all Third Party Services you purchase from the

                                                Third Party Service Provider, and that Company or Third Party Service Provider may

                                                charge your credit card account as provided by you when registering for the Service

                                                (including any taxes and late fees, as applicable) that may be accrued by or in connection

                                                with your account. You are responsible for the timely payment of all fees and for providing

                                                Company with a valid credit card account for payment of all fees at all times. You must

                                                keep all billing information, including payment method, up to date. You authorize and direct

                                                us to charge your designated payment method for these charges or, if your designated

                                                payment method fails, to charge any other payment method you have on file with us.

                                                Further, you authorize and direct us to retain information about the payment method(s)

                                                associated with your account. If we do not receive payment from your designated payment

                                                method or any other payment method on file, you agree to pay all amounts due upon

                                                demand by us. After 30 days from the date of any unpaid charges, your payment will be

                                                deemed delinquent and we reserve the right to assess an additional 1.5 percent late

                                                charge (or the highest amount allowed by law, whichever is lower) per month if your

                                                payment is more than 30 days past due and to use any lawful means to collect any unpaid

                                                charges. You are liable for any fees, including attorney and collection fees, incurred by us

                                                in our efforts to collect any remaining balances from you. You are responsible for all

                                                charges incurred under your account, including applicable taxes, fees, surcharges, and

                                                purchases made by you or anyone you allow to use your account (including your children,

                                                family, friends, or any other person with implied, actual, or apparent authority) or anyone

                                                who gains access to your account as a result of your failure to safeguard your username,

                                                password, or other authentication credentials or information</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Company may use a third-party payment processor (the
                                                “Payment Processor”) to link your

                                                credit card account to the Service. The processing of payments or credits, as applicable, in

                                                connection with your use of the Service will be subject to the terms, conditions and privacy

                                                policies of the Payment Processor and your credit card issuer in addition to this

                                                Agreement. Company is not responsible for any errors by the Payment Processor. In

                                                connection with your use of the Service, Company will obtain certain transaction details,

                                                which Company will use solely in accordance with its Privacy Policy.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Any fees which the Company or Third Party Service Provider
                                                may charge you for the

                                                Software or Service or Third Party Services are due immediately upon completion of your

                                                applicable use of the Software, Service or the Third Party Service transaction and are non-

                                                refundable. This no refund policy shall apply at all times regardless of your decision to

                                                terminate your usage, the Company&#39;s decision to terminate your usage, disruption caused

                                                to our Software or Service either planned, accidental or intentional, or any reason

                                                whatsoever. The Company reserves the right to determine final prevailing pricing - Please

                                                note the pricing information published on the website may not reflect the prevailing
                                                pricing.

                                                The Company, at its sole discretion, make promotional offers with different features and

                                                different rates to any of our customers. These promotional offers, unless made to you,

                                                shall have no bearing whatsoever on your offer or contract. The Company may change the

                                                fees for our Service as we deem necessary for our business. We encourage you to check

                                                back at our website periodically if you are interested about how we charge for the Service.

                                                We may not be responsible for determining fees charged by Third Party Service providers,

                                                so you should be sure to review all pricing and other terms of any agreement or

                                                transaction you conduct with them.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Public Postings</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Certain material you may post on our Services is or may
                                                be available to the public,

                                                including without limitation any public profile data, uploads, blog entries, ratings,
                                                reviews,

                                                images, videos, poll answers, and any other user generated content, in any form or media,

                                                that you post via the Service or otherwise (collectively, &quot;Public Postings&quot;).
                                                These Public

                                                Postings will be treated as non-confidential and nonproprietary. You are responsible for

                                                any Public Postings and the consequences of sharing or publishing such content with

                                                others or the general public. This includes, for example, publicly sharing any personal

                                                information, such as your home address, the home address of others, or your current

                                                location. COMPANY IS NOT RESPONSIBLE FOR THE CONSEQUENCES OF PUBLICLY

                                                SHARING OR POSTING ANY PERSONAL OR OTHER INFORMATION ON THE

                                                SERVICES.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Other content or communications you privately transmit
                                                to Company, including without

                                                limitation any feedback, data, questions, comments, suggestions, in any form or media,

                                                that you submit to us via e-mail, the Services or otherwise (collectively, &quot;
                                                Submissions&quot;), will

                                                be treated as non-confidential and nonproprietary, except if and to the extent otherwise

                                                expressly required in our Privacy Policy, with respect to any personally identifiable

                                                information privately submitted to us.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>By providing any Public Posting or Submission, you (i)
                                                grant to Company a royalty-free,

                                                non-exclusive, perpetual, irrevocable, sub-licensable right to use, reproduce, modify,

                                                adapt, publish, translate, create derivative works (including products) from, distribute,
                                                and

                                                display such content throughout the world in all media and you license to us all patent,

                                                trademark, trade secret, copyright or other proprietary rights in and to such content for

                                                publication on the Service pursuant to this Agreement; (ii) agree that Company shall be

                                                free to use any ideas, concepts or techniques embodied therein for any purpose

                                                whatsoever, including, but not limited to, developing and marketing products or services

                                                incorporating such ideas, concepts, or techniques, without attribution, without any
                                                liability

                                                or obligation to you; (iii) grant to Company the right to use the name that you submit in

                                                connection with such content. In addition, you hereby waive all moral rights you may have

                                                in any Public Posting or Submissions.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>By providing any Public Posting or Submission, you (i)
                                                grant to Company a royalty-free,

                                                non-exclusive, perpetual, irrevocable, sub-licensable right to use, reproduce, modify,

                                                adapt, publish, translate, create derivative works (including products) from, distribute,
                                                and

                                                display such content throughout the world in all media and you license to us all patent,

                                                trademark, trade secret, copyright or other proprietary rights in and to such content for

                                                publication on the Service pursuant to this Agreement; (ii) agree that Company shall be

                                                free to use any ideas, concepts or techniques embodied therein for any purpose

                                                whatsoever, including, but not limited to, developing and marketing products or services

                                                incorporating such ideas, concepts, or techniques, without attribution, without any
                                                liability

                                                or obligation to you; (iii) grant to Company the right to use the name that you submit in

                                                connection with such content. In addition, you hereby waive all moral rights you may have

                                                in any Public Posting or Submissions.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>You shall be solely responsible for your own content and
                                                any Pubic Postings and

                                                Submissions. You affirm, represent, and warrant that you own or have the necessary

                                                licenses, rights, consents, and permissions to publish content you post or submit. You

                                                further agree that content you submit via Public Postings or Submissions will not contain

                                                third party copyrighted material, or material that is subject to other third party
                                                proprietary

                                                rights, unless you have permission from the rightful owner of the material or you are

                                                otherwise legally entitled to post the material and to grant us all of the license rights

                                                granted herein. You further agree that you will not submit to the Service any content or

                                                other material that is contrary to our community guidelines, which may be updated from

                                                time to time, or contrary to applicable local, national, and international laws and

                                                regulations.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Company does not endorse any content submitted to the
                                                Service by any user or other

                                                licensor, or any opinion, recommendation, or advice expressed therein, and Company

                                                expressly disclaims any and all liability in connection with content. We do not permit

                                                copyright infringing activities and infringement of intellectual property rights on the
                                                Service,

                                                and we will remove all content if properly notified that such content infringes on
                                                another&#39;s

                                                intellectual property rights. We reserve the right to remove content without prior notice.

                                                Company reserves the right to decide whether your content violates this Agreement for

                                                reasons other than copyright infringement, such as, but not limited to, pornography,

                                                obscenity, or excessive length. Company may at any time, without prior notice and in our

                                                sole discretion, remove such content and/or terminate a user&#39;s account for submitting
                                                such

                                                material in violation of this Agreement.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Intellectual Property Ownership</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Company alone (and its licensors, where applicable)
                                                shall own all right, title and

                                                interest, including all related intellectual property rights, in and to the Software and the

                                                Service. To the extent you provide any suggestions, ideas, enhancement requests,

                                                feedback, recommendations or other information regarding the Service or Software, you

                                                hereby assign to the Company all right, title and interest thereto. This Agreement is not a

                                                sale and does not convey to you any rights of ownership in or related to the Software or

                                                the Service, or any intellectual property rights owned by the Company. The Company

                                                name, the Company logo, and the product names associated with the Software and

                                                Service are trademarks of the Company or third parties, and no right or license is granted

                                                to use them.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Third Party Interactions</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>During use of the Software and Service, you may enter into
                                                correspondence with,

                                                purchase goods and/or services from, or participate in promotions of third party service

                                                providers, advertisers or sponsors showing their goods and/or services through the

                                                Software or Service. Any such activity, and any terms, conditions, warranties or

                                                representations associated with such activity, is solely between you and the applicable

                                                third-party. The Company and its licensors shall have no liability, obligation or
                                                responsibility

                                                for any such correspondence, purchase, transaction or promotion between you and any

                                                such third-party. The Company does not endorse any sites on the Internet that are linked

                                                through the Service or Software, and in no event shall the Company or its licensors be

                                                responsible for any content, products, services or other materials on or available from such

                                                sites or third party providers. The Company provides the Software and Service to you

                                                pursuant to the terms and conditions of this Agreement. You recognize, however, that

                                                certain third-party providers of goods and/or services may require your agreement to

                                                additional or different terms and conditions prior to your use of or access to such goods or

                                                services, and the Company disclaims any and all responsibility or liability arising from
                                                such

                                                agreements between you and the third party providers.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Company may rely on third party advertising and
                                                marketing supplied through the

                                                Software or Service and other mechanisms to subsidize the Software or Service. By

                                                agreeing to these terms and conditions you agree to receive such advertising and

                                                marketing. The Company may compile and release information regarding you and your

                                                use of the Software or Service on an anonymous basis as part of a customer profile or

                                                similar report or analysis. You agree that it is your responsibility to take reasonable

                                                precautions in all actions and interactions with any third party you interact with through
                                                the

                                                Service.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>You will be responsible for your own connectivity to the
                                                Service, including without limitation

                                                via mobile connection, internet access, and other communications and connectivity, at

                                                your own cost and expense. Depending on your method of access, additional messaging

                                                or data rates may apply from your carrier.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>If you are using Software such as a mobile app,
                                                additional terms and conditions may apply

                                                in accordance with the terms and conditions of the applicable app store from which you

                                                downloaded the Software.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Indemnification</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>By entering into this Agreement and using the Software or
                                                Service, you agree to defend,

                                                indemnify and hold the Company, its licensors and each such party&#39;s parent
                                                organizations,

                                                subsidiaries, affiliates, officers, directors, members, employees, attorneys and agents

                                                harmless from and against any and all claims, costs, damages, losses, liabilities and

                                                expenses (including attorneys&#39; fees and costs) arising out of or in connection with: (a)
                                                your

                                                violation or breach of any term of this Agreement or any applicable law or regulation,

                                                whether or not referenced herein; (b) your violation of any rights of any third party,

                                                including providers of Third Party Services arranged via the Service or Software, or (c)

                                                your use or misuse of the Software or Service or any Third Party Service.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Termination</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Company reserves the right to (i) modify or
                                                discontinue, temporarily or permanently,

                                                the Service (or any part thereof) and (ii) refuse any and all current and future use of the

                                                Service, suspend or terminate your account (any part thereof) or use of the Service, for

                                                any reason, including if the Company believes that you have violated this Agreement. The

                                                Company shall not be liable to you or any third party for any modification, suspension or

                                                discontinuation of the Service.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Disclaimer of Warranties</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>THE COMPANY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY
                                                AS TO

                                                THE RELIABILITY, TIMELINESS, QUALITY, SUITABILITY, AVAILABILITY, ACCURACY

                                                OR COMPLETENESS OF THE SERVICE OR SOFTWARE (OR ANY THIRD PARTY

                                                SERVICES). THE COMPANY DOES NOT REPRESENT OR WARRANT THAT (A) THE

                                                USE OF THE SERVICE OR SOFTWARE WILL BE SECURE, TIMELY, UNINTERRUPTED

                                                OR ERROR-FREE OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE,

                                                SOFTWARE, SYSTEM OR DATA, (B) THE SERVICE OR SOFTWARE (OR ANY THIRD

                                                PARTY SERVICES) WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) ANY

                                                STORED DATA WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY

                                                PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR

                                                OBTAINED BY YOU THROUGH THE SERVICE (INCLUDING ANY THIRD PARTY

                                                SERVICES) WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, (E) ERRORS

                                                OR DEFECTS IN THE SERVICE OR SOFTWARE WILL BE CORRECTED, OR (F) THE

                                                SERVICE OR THE SERVER(S) THAT MAKE THE SERVICE AVAILABLE ARE FREE OF

                                                VIRUSES OR OTHER HARMFUL COMPONENTS. THE SERVICE AND SOFTWARE IS

                                                PROVIDED TO YOU STRICTLY ON AN &quot;AS IS&quot; BASIS. ALL CONDITIONS,

                                                REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED,

                                                STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED

                                                WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR

                                                NON-INFRINGEMENT OF THIRD PARTY RIGHTS, ARE HEREBY DISCLAIMED TO THE

                                                MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW BY THE COMPANY. THE

                                                COMPANY MAKES NO REPRESENTATION, WARRANTY, OR GUARANTY AS TO THE

                                                RELIABILITY, SAFETY, TIMELINESS, QUALITY, SUITABILITY OR AVAILABILITY OF

                                                ANY THIRD PARTY SERVICES. YOU ACKNOWLEDGE AND AGREE THAT THE

                                                ENTIRE RISK ARISING OUT OF YOUR USE OF THE SOFTWARE AND SERVICE, AND

                                                ANY THIRD PARTY SERVICES, REMAINS SOLELY WITH YOU, TO THE MAXIMUM

                                                EXTENT PERMITTED BY LAW.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Network Delays</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>THE COMPANY&#39;S SERVICE AND SOFTWARE MAY BE SUBJECT TO
                                                LIMITATIONS,

                                                DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF THE INTERNET,

                                                TELECOMMUNICATIONS NETWORKS AND ELECTRONIC COMMUNICATIONS. THE

                                                COMPANY IS NOT RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR

                                                OTHER DAMAGE RESULTING FROM SUCH PROBLEMS.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Limitation of Liability</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>IN NO EVENT SHALL THE COMPANY&#39;S AGGREGATE LIABILITY
                                                EXCEED THE

                                                AMOUNTS ACTUALLY PAID BY AND/OR DUE FROM YOU IN THE SIX (6) MONTH

                                                PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM. IN

                                                NO EVENT SHALL THE COMPANY AND/OR ITS LICENSORS BE LIABLE TO ANYONE

                                                FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL,

                                                CONSEQUENTIAL OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING

                                                PERSONAL INJURY, LOSS OF DATA, REVENUE, PROFITS, USE OR OTHER

                                                ECONOMIC ADVANTAGE). THE COMPANY AND/OR ITS LICENSORS SHALL NOT BE

                                                LIABLE FOR ANY LOSS, DAMAGE OR INJURY WHICH MAY BE INCURRED BY YOU,

                                                INCLUDING BY NOT LIMITED TO LOSS, DAMAGE OR INJURY ARISING OUT OF, OR

                                                IN ANY WAY CONNECTED WITH THE SERVICE OR SOFTWARE, INCLUDING BUT

                                                NOT LIMITED TO THE USE OR INABILITY TO USE THE SERVICE OR SOFTWARE,

                                                ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS, ACCURACY OR

                                                EXISTENCE OF ANY ADVERTISING, OR AS A RESULT OF ANY RELATIONSHIP OR

                                                TRANSACTION BETWEEN YOU AND ANY THIRD PARTY SERVICE PROVIDER,

                                                ADVERTISER OR SPONSOR WHOSE ADVERTISING APPEARS ON THE WEBSITE OR

                                                IS REFERRED BY THE SERVICE OR SOFTWARE, EVEN IF THE COMPANY AND/OR

                                                ITS LICENSORS HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH

                                                DAMAGES.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>THE COMPANY MAY INTRODUCE YOU TO THIRD PARTY SERVICE
                                                PROVIDERS FOR

                                                THE PURPOSES OF PROVIDING THIRD PARTY SERVICES. WE WILL NOT ASSESS

                                                THE SUITABILITY, LEGALITY OR ABILITY OF ANY THIRD PARTY SERVICE

                                                PROVIDERS AND YOU EXPRESSLY WAIVE AND RELEASE THE COMPANY FROM

                                                ANY AND ALL ANY LIABILITY, CLAIMS OR DAMAGES ARISING FROM OR IN ANY

                                                WAY RELATED TO THE THIRD PARTY SERVICE PROVIDER. THE COMPANY WILL

                                                NOT BE A PARTY TO DISPUTES OR NEGOTIATIONS BETWEEN YOU AND SUCH

                                                THIRD PARTY PROVIDERS. RESPONSIBILITY FOR THE DECISIONS YOU MAKE

                                                REGARDING THIRD PARTY SERVICES OFFERED VIA THE SOFTWARE OR SERVICE

                                                (WITH ALL ITS IMPLICATIONS) RESTS SOLELY WITH YOU. WE WILL NOT ASSESS

                                                THE SUITABILITY, LEGALITY OR ABILITY OF ANY SUCH THIRD PARTIES AND YOU

                                                EXPRESSLY WAIVE AND RELEASE THE COMPANY FROM ANY AND ALL LIABILITY,

                                                CLAIMS, CAUSES OF ACTION, OR DAMAGES ARISING FROM YOUR USE OF THE

                                                SOFTWARE OR SERVICE, OR IN ANY WAY RELATED TO THE THIRD PARTIES

                                                INTRODUCED TO YOU BY THE SOFTWARE OR SERVICE.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>THE QUALITY OF THE THIRD PARTY SERVICES SCHEDULED
                                                THROUGH THE USE

                                                OF THE SERVICE OR SOFTWARE IS ENTIRELY THE RESPONSIBILITY OF THE

                                                THIRD PARTY PROVIDER WHO ULTIMATELY PROVIDES SUCH THIRD PARTY

                                                SERVICES TO YOU. YOU UNDERSTAND, THEREFORE, THAT BY USING THE

                                                SOFTWARE AND THE SERVICE, YOU MAY BE EXPOSED TO THIRD PARTY

                                                SERVICES THAT ARE POTENTIALLY DANGEROUS, OFFENSIVE, HARMFUL TO

                                                MINORS, UNSAFE OR OTHERWISE OBJECTIONABLE, AND THAT YOU USE THE

                                                SOFTWARE AND THE SERVICE, AND SUCH THIRD PARTY SERVICES, AT YOUR

                                                OWN RISK.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>NOTHING ON THIS WEBSITE CONSTITUTES, OR IS MEANT TO
                                                CONSTITUTE,

                                                ADVICE OF ANY KIND. IF YOU REQUIRE ADVICE IN RELATION TO ANY LEGAL,

                                                FINANCIAL OR MEDICAL MATTER YOU SHOULD CONSULT AN APPROPRIATE

                                                PROFESSIONAL. BY USING THE SERVICE OR SOFTWARE, YOU AGREE THAT THE

                                                EXCLUSIONS AND LIMITATIONS OF LIABILITY SET OUT IN THIS AGREEMENT ARE

                                                REASONABLE. IF YOU DO NOT THINK THEY ARE REASONABLE, YOU MUST NOT

                                                USE THE SERVICE OR SOFTWARE.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Notice</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Company may give notice to you by means of a general
                                                notice on a portion of the

                                                Service (which may include posting on the Company website), electronic mail to your

                                                email address on record in the Company&#39;s account information, or by written

                                                communication sent by first class mail or pre-paid post to your address on record in the

                                                Company&#39;s account information. Such notice shall be deemed to have been given upon

                                                the expiration of 48 hours after mailing (if sent by first class mail or pre-paid post) or
                                                12

                                                hours after sending (if sent by email) or posting. You may give notice to the Company only

                                                in writing (such notice shall be deemed given only when actually received by the

                                                Company).</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>International Use</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>The Service is controlled, operated and administered by us
                                                from within the Germany.

                                                Company makes no representation that this site is available for access or use at other

                                                locations outside the Germany. However, any access or use from outside the Germany is

                                                still subject to this Agreement. Access to this Service is expressly prohibited from

                                                territories where this site or any portion thereof is illegal. You agree not to access or
                                                use

                                                any information or materials on the Service in violation of Germany export laws and

                                                regulations, or in violation of any laws or regulations in the country from which you are

                                                accessing the Service.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Other Parties</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>You accept that, as a corporation, the Company has an
                                                interest in limiting the personal

                                                liability of its officers and employees. You agree that you will not bring any claim
                                                personally

                                                against the Company&#39;s officers or employees in respect of any losses you suffer in

                                                connection with the Service or Software. Without prejudice to the foregoing, you agree that

                                                the limitations of warranties and liability set out in this Agreement will protect the

                                                Company&#39;s officers, employees, agents, subsidiaries, successors, assigns and sub-

                                                contractors as well as the Company.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Breaches of these terms and conditions</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Without prejudice to the Company&#39;s other rights under
                                                these terms and conditions, if you

                                                breach these terms and conditions in any way, the Company may take such action as the

                                                Company deems appropriate to deal with the breach, including suspending your access to

                                                the Service or Software, prohibiting you from accessing the Service or Software, blocking

                                                computers using your IP address from accessing the Service or Software, contacting your

                                                internet service provider to request that they block your access to the Service or Software

                                                and/or bringing court proceedings against you.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Assignment</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>This Agreement may not be assigned by you without the
                                                prior written approval of the

                                                Company but may be assigned without your consent by the Company to (i) a parent or

                                                subsidiary, (ii) an acquirer of assets, or (iii) any other successor or acquirer. Any
                                                purported

                                                assignment in violation of this section shall be void. In the event that Company is sold to
                                                a

                                                third party, such a sale will not be deemed a transfer of personal information so long as

                                                that third party agrees to assume Company&#39;s obligations as to this Agreement and any

                                                associated Privacy Policy.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Governing Law</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>Except as expressly provided otherwise, this Agreement
                                                will be is governed by, and will be

                                                construed under, the laws Germany, without regard to choice of law principles. You

                                                consent to jurisdiction and venue exclusively in the courts in Germany. You agree that

                                                Company retains the right to seek injunctive or other equitable relief in a court of

                                                competent jurisdiction to prevent the actual or threatened infringement, misappropriation or

                                                violation of a party&#39;s copyrights, trademarks, trade secrets, patents, or other
                                                intellectual

                                                property rights. You agree that regardless of any statute or law to the contrary, any claim
                                                or

                                                cause of action arising out of this Agreement or related to use of the Service must be filed

                                                by you within three (3) months after such claim or cause of action arose or be forever

                                                barred.</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>General</Text>
                            <Text style={[LayoutStyle.aboutUsText]}>No joint venture, partnership, employment, or agency
                                                relationship exists between you, the

                                                Company or any third party provider as a result of this Agreement or use of the Service or

                                                Software. If any provision of the Agreement is held to be invalid or unenforceable, such

                                                provision shall be struck and the remaining provisions shall be enforced to the fullest

                                                extent under law. The failure of the Company to enforce any right or provision in this

                                                Agreement shall not constitute a waiver of such right or provision unless acknowledged

                                                and agreed to by the Company in writing. This Agreement comprises the entire agreement

                                                between you and the Company and supersedes all prior or contemporaneous

                                                negotiations, discussions or agreements, whether written or oral, between you and the

                                                Company regarding the subject matter contained herein.</Text>
                        </ScrollView>

                        <Button
                            onPress={() => {this.setState({isLicenseConfirmed: true}); this.popupDialog.dismiss()}}
                            text={strings["Confirm"]}
                            style={{marginVertical: 10}}
                        />

                    </View>
                </PopupDialog>
                <OrientationLoadingOverlay
                    visible={this.state.isLoaderVisible}
                    color="white"
                    indicatorSize="large"
                    messageFontSize={24}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    checkboxWrapper: {
        flex: 1,
        minHeight: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 14,
        height: 14,
        marginLeft: 20,
    }
});

export default connect(
    state => ({
        registration: state.registration,
        user: state.user
    }),
    dispatch => ({
        setStorageUser: (value, callback) => {
            dispatch({type: UserActions.SET_USER, value, callback});
        }
    })
)(SignUpForm);
