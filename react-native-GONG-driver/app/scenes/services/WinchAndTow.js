import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactNative, {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    Platform,
    Switch,
    Keyboard,
    Image,
} from 'react-native';
import  LayoutStyle from  '../../styles/Layout';
import {Actions} from 'react-native-router-flux';
import RadioButton from '../../components/RadioButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button';
import Icon from '../../assets/svg/svg';
import API from '../../services/api';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';
import * as ActionR from '../../constants/actionsRoute';

//translations
import {strings} from '../../utilits/localStrings.js';

const dismissKeyboard = require('dismissKeyboard');

class WinchAndTow extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isServiceSupported: false,
            km: '',
            servicePrice: '',
            perKmPrice: '',
            towedPrice: '',
            trackType: null,
            idFocusedInput: 0,
            errorMessage: '',
            loader: true
        };

        this.fields = [
            {
                id: 1,
                title: strings['Only send me jobs within'],
                placeholder: 'km',
                value: 'km',
                inputProps: {
                    maxLength: 3,
                    keyboardType:'numeric',
                    placeholder: 'km',
                }
            },
            {
                id: 2,
                title: strings['Truck Type'],
                placeholder: '',
                value: 'trackType',
                trackType: [
                    {
                        name: strings['Lift Truck'],
                        id: '1'
                    },
                    {
                        name: strings['Flatbad Truck'],
                        id: '2'
                    }
                ]
            },
            {
                id: 3,
                title: strings['Service price'],
                placeholder: 'EUR',
                value: 'servicePrice',
                inputProps: {
                    maxLength: 3,
                    keyboardType:'numeric',
                    placeholder: 'EUR',
                }
            },
            {
                id: 4,
                title: strings['Per km price'],
                placeholder: 'EUR',
                value: 'perKmPrice',
                inputProps: {
                    maxLength: 3,
                    keyboardType:'numeric',
                    placeholder: 'EUR',
                }
            },
            {
                id: 5,
                title: strings['Towed per km price'],
                placeholder: 'EUR',
                value: 'towedPrice',
                inputProps: {
                    maxLength: 3,
                    keyboardType:'numeric',
                    placeholder: 'EUR',
                }
            }
        ];

        this.renderFields = this.renderFields.bind(this);
        this.changeFocusedInput = this.changeFocusedInput.bind(this);

        this.submit = this.submit.bind(this);
        this._doRouteAfterSubmit = this._doRouteAfterSubmit.bind(this);

    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.registrationProcess) {
                // console.log(this.props.route.history);
                this.props.changeBackButton(
                    this.props.route.history[this.props.route.history.length - 2].scene,
                    {service: {id: this.props.service.id - 1}, registrationProcess: this.props.registrationProcess}
                );
            }

            this.keyboardListener = Keyboard.addListener('keyboardWillShow', (e) => {
                this.keyboardSize = e.endCoordinates.height;
            });

            API.getRateByService({
                token: this.props.user.token,
                service_id: this.props.service.id
            }, (response) => {
                if (response.error) {
                    alert(strings['Server error, try again later']);
                    return;
                }

                if (response.result.length) {
                    let res = response.result[0];
                    // console.log(res, 'result');
                    this.setState({
                        isServiceSupported: true,
                        servicePrice: res.service_price,
                        km: res.distance + '',
                        perKmPrice: res.per_km_price,
                        towedPrice: res.towed_per_km,
                        trackType: res.track_type,
                        loader: false
                    });
                } else {
                    this.setState({
                        loader: false
                    })
                }
            });
        }, 0);
    }

    componentWillUnmount() {
        this.keyboardListener && this.keyboardListener.remove();
    }

    submit() {
        dismissKeyboard();

        this.setState({errorMessage: ''});

        if (this.state.isServiceSupported) {
            if (!this.state.km || !this.state.servicePrice || !this.state.perKmPrice || !this.state.towedPrice) {
                this.setState({errorMessage: strings['Fields can not be empty!']});
                return;
            }
            if (this.state.trackType === null) {
                this.setState({errorMessage: strings['Choose track type']});
                return;
            }
            if (!this.state.km.match(/^\d+$/) || !this.state.servicePrice.match(/^\d+$/) || !this.state.perKmPrice.match(/^\d+$/) || !this.state.towedPrice.match(/^\d+$/)) {
                this.setState({errorMessage: strings['Fields can contain only numbers']});
                return;
            }
            if (this.state.km > 999 || this.state.servicePrice > 999 || this.state.perKmPrice > 999 || this.state.towedPrice > 999) {
                this.setState({errorMessage: strings['Maximum value is 999']});
                return;
            }
        } else {
            API.removeRate({
                token: this.props.user.token,
                service_id: this.props.service.id
            }, (response) => {
                // console.log(response);
                // Actions.rates();
                this._doRouteAfterSubmit();
            });
            return;
        }

        let result = {
            token: this.props.user.token,
            service_id: this.props.service.id,
            min_distance: this.state.km,
            service_price: this.state.servicePrice,
            per_km_price: this.state.perKmPrice,
            track_type: this.state.trackType,
            towed_per_km: this.state.towedPrice,
        };

        API.setRate(result, (response)=> {
            // console.log(response);
            // Actions.rates();
            this._doRouteAfterSubmit();
        });
    }

    _doRouteAfterSubmit() {
        if (this.props.registrationProcess) {
            Actions.lockedService({service: {id: this.props.service.id+1}, registrationProcess: this.props.registrationProcess});
        } else {
            Actions.rates();
        }
    }

    changeFocusedInput(value) {
        this.setState({idFocusedInput: value});
    }

    renderFields() {
        return this.state.isServiceSupported && this.fields.map((field, index) => {
                return field.id == 2 ?
                    <View
                        key={field.id}
                        style={{
                        borderColor: '#dcdcdc',
                        borderBottomWidth: 1
                    }}
                    >
                        <Text
                            style={{
                            marginTop: 15,
                            marginLeft: 20,
                            fontSize: 14,
                            color: ((this.state.errorMessage && this.state[field.value] === null) ? 'red' : '#232323'),
                        }}
                        >
                            {strings['Truck Type']}
                        </Text>
                        <View style={[{paddingVertical: 15, paddingHorizontal: 20, flexDirection: 'row'}]}
                        >
                            {
                                field.trackType.map( item => {
                                    return (
                                        <View
                                            key={item.id}
                                            style={{
                                                flexDirection: 'row',
                                                marginRight: 40,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <RadioButton
                                                isSelected={(this.state.trackType == item.id)}
                                                onPress={()=> {
                                                this.setState({trackType: item.id})
                                            }}
                                            />
                                            <Text style={{
                                                marginLeft: 10,
                                                fontSize: 14,
                                                color: '#232323',
                                            }}>{item.name}</Text>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    </View>
                    :
                    <TouchableOpacity
                        key={field.id}
                        style={LayoutStyle.listItem}
                        onPress={()=>this.refs[field.id].focus()}
                    >
                        <View style={[ {marginLeft: 20, flex: 2}]}>
                            <Text
                                style={{
                                color: (this.state.errorMessage && (!this.state[field.value] || !this.state[field.value].match(/^\d+$/) || this.state[field.value] > 999) ? 'red' : '#232323'),
                                fontSize: 14
                            }}
                            >
                                {field.title}
                            </Text>
                        </View>
                        <TextInput
                            returnKeyType={(index < this.fields.length - 1) ? "next" : "done"}
                            onSubmitEditing={() => {
                                if (field.id == 1) {
                                    this.refs[field.id].blur();
                                    return;
                                }
                                this.refs[field.id+1] ? this.refs[field.id+1].focus() : this.submit();
                            }}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(text)=>this.setState({[field.value]: text})}
                            value={this.state[field.value]}
                            blurOnSubmit={false}
                            onFocus={(event)=>{
                                if (!(index < this.fields.length - 1) && Platform.OS === 'ios') {

                                    let interval = setInterval(() => {
                                        if (!this.keyboardSize) return;
                                        this.refs['keyboardAwareScrollView'].scrollToPosition(0, this.keyboardSize, true);
                                        clearInterval(interval);
                                    }, 10);

                                } else {
                                    this.refs['keyboardAwareScrollView'].scrollToFocusedInput(ReactNative.findNodeHandle(event.target))
                                }
                                this.changeFocusedInput(field.id)
                            }}
                            onBlur={()=>{this.changeFocusedInput(0);}}
                            ref={field.id}
                            style={[LayoutStyle.listItemText, {
                            color: '#000',
                            textAlign: 'right',
                            paddingHorizontal: 2
                        }]}
                            placeholderTextColor="#aaa"
                            {...field.inputProps}
                            placeholder={''}
                        />
                        <Text style={this.state[field.value] ? {color: '#000'} : {color: '#aaa'}}>{field.inputProps.placeholder}</Text>

                        <View style={{alignItems: 'center', width: 50, justifyContent: 'center'}}>
                            <Icon
                                name="arrowDown"
                                style={this.state.idFocusedInput == field.id ? {transform: [{scaleY: -1}]} : {transform: [{scaleY: 1}]}}
                            />
                        </View>
                    </TouchableOpacity>
            })
    }

    render() {
        return (
            <KeyboardAwareScrollView
                extraHeight={120}
                ref="keyboardAwareScrollView"
                enableAutoAutomaticScroll={false}
                style={LayoutStyle.contentContainer}
                contentContainerStyle={LayoutStyle.scrollViewContentContainer}
                keyboardShouldPersistTaps={'always'}
            >
                <TouchableWithoutFeedback onPress={()=> dismissKeyboard()}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <Text style={LayoutStyle.h1}>{strings["Setup winch and tow rates"]}</Text>

                            <View style={LayoutStyle.blockWithList}>
                                <View style={[LayoutStyle.listItem, {paddingHorizontal: 20}]}>
                                    <Text style={{flex: 1, color: '#232323'}}>{strings["Do you support current service?"]}</Text>
                                    <Switch
                                        onValueChange={() => this.setState((prevState) => ({isServiceSupported: !prevState.isServiceSupported}))}
                                        value={this.state.isServiceSupported}
                                    />
                                </View>

                                {this.renderFields()}
                            </View>

                        </View>

                        <Text style={LayoutStyle.errorText}>{this.state.errorMessage}</Text>

                        <Text style={{color: '#949494', textAlign: 'center', fontSize: 8}}>
                            {strings["GONG does not pay for en route miles."]}
                        </Text>

                        <Button
                            onPress={()=>this.submit()}
                            text={strings["Confirm"]}
                            style={{marginVertical: 10}}
                        />

                        <OrientationLoadingOverlay
                            visible={this.state.loader}
                            color="white"
                            indicatorSize="large"
                            messageFontSize={24}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        );
    }
}

export default connect(
    state => ({
        route: state.routes,
        user: state.user,
        language: state.language
    }),
    dispatch => ({
        changeBackButton: (scene, props) => {
            dispatch({
                type: ActionR.CHANGE_BACK_BUTTON,
                scene,
                props
            })
        }
    })
)(WinchAndTow);
