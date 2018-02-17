import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import API from '../services/api'
import  LayoutStyle from  '../styles/Layout'
import {connect} from 'react-redux';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const dismissKeyboard = require('dismissKeyboard');

class PaymentScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            expirationYear: '',
            expirationMonth: '',
            cvv: '',
            message: '',
            editableInput: true
        };
    }

    onChangeNumber(text) {
        if (!isNaN(text)) {
            this.setState({
                message: '',
                cardNumber: text
            });
        }
        else {
            this.setState({
                message: 'Only number value!'
            });
        }


    }

    onChangeYear(text) {
        let currentYear = new Date().getFullYear();

        if (!isNaN(text) && (text.length < 4 || text >= currentYear && text <= currentYear + 5)) {
            this.setState({
                message: '',
                expirationYear: text
            });
        }
        else if (isNaN(text)) {
            this.setState({
                message: 'Only number value!'
            });
        }
        else {
            this.setState({
                message: 'Incorrect year'
            });
        }

    }

    onChangeMonth(text) {
        if (!isNaN(text) && text <= 12) {
            this.setState({
                message: '',
                expirationMonth: text
            });
        }
        else {
            this.setState({
                expirationMonth: this.state.expirationMonth
            });
        }
    }

    onChangeCvv(text) {
        if (!isNaN(text)) {
            this.setState({
                message: '',
                cvv: text
            });
        }
        else {
            this.setState({
                message: 'Only number value!',
            });
        }

    }


    submitForm() {
        if (!this.state.cardNumber || !this.state.expirationYear || !this.state.expirationMonth || !this.state.cvv) {
            this.setState({message: 'Fields can not be empty !'});
        }
        else {
            dismissKeyboard();
            this.setState({editable: !this.state.editableInput});
            API.payment({
                card_number: this.state.cardNumber.slice(-4),
                api_token: this.props.user.token,
            }, function (result) {
                console.log(result);
                if (result.error) {
                    this.setState({message: result.message});
                    return 0;
                }
            }.bind(this));
            this.setState({editable: !this.state.editableInput});
            Actions.customerGeolocation({loader: false});
        }
    }

    _handleFocus(event) {
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);
    }

    render() {
        return (
            <KeyboardAwareScrollView style={{marginTop: 54}}
                                     enableAutoAutomaticScroll={true}
                                     ref="keyboardAwareScrollView"
                                     extraHeight={60}
            >
                <View style={[LayoutStyle.container, {justifyContent: 'flex-start', marginTop: 80}]}>
                    <View style={{paddingBottom: 30,}}>
                        <Icon
                            size={45}
                            name="Lock_close"
                            fontSize="2"
                            style={{
                                position: 'absolute',
                                color: 'black',
                                left: (Platform.OS === 'ios') ? -25 : 5,
                                top: (Platform.OS === 'ios') ? -5 : -15,
                            }}/>
                        <View style={{left: (Platform.OS === 'ios') ? 15 : 5}}>
                            <Text style={[LayoutStyle.title, {textAlign: 'center'}]}>Payment card details</Text>
                            <Text style={LayoutStyle.title}>This is securely encripted payment</Text>
                        </View>
                    </View>
                    <View style={{borderBottomWidth: 2, borderColor: 'lightgray'}}>
                        <Text style={[LayoutStyle.subTitle, {width: 240}]}>Payment</Text>
                    </View>
                    <View style={[LayoutStyle.textInputContainer, {marginTop: 10}]}>
                        <TextInput
                            onFocus={(event) => {
                                this._handleFocus(event);
                            }}
                            editable={this.state.editableInput}
                            returnKeyType={"next"}
                            onSubmitEditing={(event) => {
                                this.refs.yyyy.focus();
                            }}
                            blurOnSubmit={false}
                            ref='card'
                            style={[LayoutStyle.textInput, {width: 240}]}
                            placeholder="Card number"
                            maxLength={16}

                            keyboardType='numeric'
                            value={this.state.cardNumber}
                            onChangeText={(text)=>this.onChangeNumber(text)}
                        />
                    </View>

                    <Text
                        style={[LayoutStyle.subTitle, {marginBottom: 10, width: 240, marginTop: 10}]}>Expiration</Text>
                    <View style={{flexDirection: 'row',}}>

                        <View style={[LayoutStyle.textInputContainer, {marginRight: 10}]}>
                            <TextInput
                                onFocus={(event) => {
                                    this._handleFocus(event);
                                }}
                                editable={this.state.editableInput}
                                returnKeyType={"next"}
                                onSubmitEditing={(event) => {
                                    this.refs.mm.focus();
                                }}
                                blurOnSubmit={false}
                                ref='yyyy'
                                style={[LayoutStyle.textInput, {width: 110, flex: 0.5}]}
                                placeholder="YYYY"
                                maxLength={4}
                                keyboardType='numeric'
                                value={this.state.expirationYear}
                                onChangeText={(text)=>this.onChangeYear(text)}
                            />
                        </View>
                        <View style={[LayoutStyle.textInputContainer]}>
                            <TextInput
                                editable={this.state.editableInput}
                                returnKeyType={"next"}
                                onSubmitEditing={(event) => {
                                    this.refs.cvv.focus();
                                }}
                                blurOnSubmit={false}
                                ref='mm'
                                onFocus={(event) => {
                                    this._handleFocus(event);
                                }}

                                style={[LayoutStyle.textInput, {width: 110, flex: 0.5}]}
                                placeholder="MM"
                                maxLength={2}
                                keyboardType='numeric'
                                value={this.state.expirationMonth}
                                onChangeText={(text)=>this.onChangeMonth(text)}
                                onBlur={()=>this.state.expirationMonth < 1 ? this.setState({expirationMonth: ''}) : null}
                            />

                        </View>
                    </View>
                    <View style={[LayoutStyle.textInputContainer, {marginTop: 10}]}>
                        <TextInput
                            editable={this.state.editableInput}
                            returnKeyType={"done"}
                            onSubmitEditing={this.submitForm.bind(this)}
                            ref='cvv'
                            onFocus={(event) => {
                                this._handleFocus(event);
                            }}
                            style={[LayoutStyle.textInput, {width: 240}]}
                            placeholder="CVV"
                            maxLength={3}
                            keyboardType='numeric'
                            value={this.state.cvv}
                            onChangeText={(text)=>this.onChangeCvv(text)}
                        />
                    </View>

                    <View>
                        <Text style={LayoutStyle.errorText}>{this.state.message}</Text>
                    </View>
                    <TouchableOpacity
                        style={LayoutStyle.btn}

                        onPress={this.submitForm.bind(this)}>
                        <Text style={LayoutStyle.btnText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    state => ({
        user: state.user
    })
)(PaymentScreen);