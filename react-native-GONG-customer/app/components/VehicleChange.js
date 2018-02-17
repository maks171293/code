import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Dimensions,
    RCTUIManager,
    AsyncStorage
} from 'react-native';

import  Autocomplete from 'react-native-autocomplete-input'
import {Actions} from 'react-native-router-flux';
import API from '../services/api'
import  LayoutStyle from  '../styles/Layout'
import  * as vehicleAction from '../constants/actionsVehicle'
import * as global from '../constants/global'
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const {height, width} = Dimensions.get('window');
const dismissKeyboard = require('dismissKeyboard');
import Storage from 'react-native-storage';

class VehicleChange extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            carModel: this.props.vehicle.vehicleModel,
            carColor: this.props.vehicle.vehicleColor,
            carLicense: this.props.vehicle.vehicleLicensePlate,
            vehicleId: this.props.vehicle.vehicleId,
            vehicle: this.props.vehicle.vehicleName,
            message: '',
            vehicles: [],
            zIndexAutocomplete: 2,
            textInputContainer: 0,
            heightAutocomplete: 50,
            autocomplateWidth: 200,
            editableInput: true
        };

        this.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });

        this.data();
        this._checkVehicleExist = this._checkVehicleExist.bind(this);
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

    /**
     *  submit form with all validation
     */
    submitForm() {

        if (!this.state.vehicle || !this.state.carModel || !this.state.carLicense) {
            this.setState({message: 'Fields can not be empty !'});
        }
        else if (!this._checkVehicleExist()) {
            this.setState({message: 'Please, choose existing car brand !'});
        }
        else {
            dismissKeyboard();

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

            this.props.onChangeVehicle({
                vehicleName: this.state.vehicle,
                vehicleModel: this.state.carModel,
                vehicleId: this.state.vehicleId,
                vehicleLicensePlate: this.state.carLicense,
                vehicleColor: this.state.carColor
            }); //update vehicle store


            API.updateCustomer({
                    vehicle_id: this.state.vehicleId,
                    vehicle_color: this.state.carColor,
                    vehicle_model: this.state.carModel,
                    vehicle_license_plate: this.state.carLicense,
                    token: this.props.user.token,
                }, function (result) {
                    console.log(result);

                    if (result.error) {
                        this.setState({message: result.message, success: false});
                        return 0;
                    }
                    else {
                        this.setState({editable: !this.state.editableInput});
                        Actions.payment();
                        this.setState({editable: !this.state.editableInput});
                    }
                }.bind(this)
            );


        }
    }

    _handleFocus(event) {
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event.target, 100);
    }

    data() {
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

    findData(query) {
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
        const data = this.findData(this.state.vehicle);

        return (
            <KeyboardAwareScrollView style={{marginTop: 54}}
                                     ref="keyboardAwareScrollView"
                                     enableAutoAutomaticScroll={true}
                                     keyboardShouldPersistTaps={true}>
                <View style={LayoutStyle.container}>
                    <View style={{paddingBottom: 30,}}>
                        <View >
                            <Text style={[LayoutStyle.title, {textAlign: 'center'}]}>Select your vehicle</Text>
                        </View>
                    </View>

                    <View style={{borderBottomWidth: 2, borderColor: 'lightgray'}}>
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
                        containerStyle={[style.textInputContainer, {
                            marginBottom: 10,
                            marginTop: 10,
                            left: (width / 2 - (this.state.autocomplateWidth / 2 + 5)),
                            zIndex: this.state.zIndexAutocomplete,
                            height: this.state.heightAutocomplete
                        }]}
                        inputContainerStyle={[LayoutStyle.textInputContainer, (this.state.message && (!this.state.vehicle || !this._checkVehicleExist())) ? {borderColor: 'red'} : {}]}
                        style={LayoutStyle.textInput}
                        listStyle={[style.carList, {height: this.state.heightAutocomplete - 50}]}
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
                                    onPress={() => {
                                        this.setState({
                                            vehicle: data.name,
                                            vehicleId: data.id,
                                            heightAutocomplete: 50
                                        });
                                        this.setState({zIndexAutocomplete: 2, heightAutocomplete: 50})
                                    }}
                                >
                                    <Text>{data.name}</Text>
                                </TouchableOpacity>
                                : null
                        )}
                    />


                    <View
                        style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.carModel) ? {borderColor: 'red'} : {}, {
                            marginTop: 55,
                            zIndex: 3
                        }]}>
                        <TextInput
                            editable={this.state.editableInput}
                            returnKeyType={"next"}
                            onSubmitEditing={(event) => {
                                this.refs.color.focus();
                            }}
                            onFocus={(event) => {
                                this._handleFocus(event);
                            }}
                            blurOnSubmit={false}
                            ref='model'
                            value={this.state.carModel}
                            style={LayoutStyle.textInput}
                            placeholder="Car model"
                            maxLength={30}
                            keyboardType='default'
                            onChangeText={(text) => this.setState({carModel: text})}
                        />
                    </View>
                    <View>
                        <View style={{marginTop: 10, marginBottom: 10}}>
                            <Text style={LayoutStyle.subTitle}>Set your car options</Text>
                        </View>
                        <View
                            style={[LayoutStyle.textInputContainer, {marginBottom: 10}]}>
                            <TextInput
                                editable={this.state.editableInput}
                                returnKeyType={"next"}
                                onSubmitEditing={(event) => {
                                    this.refs.license.focus();
                                }}
                                blurOnSubmit={false}
                                ref='color'
                                onFocus={(event) => {
                                    this._handleFocus(event);
                                }}
                                value={this.state.carColor}
                                style={LayoutStyle.textInput}
                                placeholder="Car color"
                                maxLength={20}
                                keyboardType='default'
                                onChangeText={(text) => this.setState({carColor: text})}
                            />
                        </View>
                    </View>
                    <View
                        style={[LayoutStyle.textInputContainer, (this.state.message && !this.state.carLicense) ? {borderColor: 'red'} : {}]}>
                        <TextInput
                            editable={this.state.editableInput}
                            returnKeyType={"done"}
                            onSubmitEditing={this.submitForm.bind(this)}
                            ref="license"
                            style={LayoutStyle.textInput}
                            placeholder="License plate"
                            value={this.state.carLicense}
                            maxLength={10}
                            onFocus={(event) => {
                                this._handleFocus(event);
                            }}
                            keyboardType='default'
                            onChangeText={(text) => this.setState({carLicense: text})}
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

    measureHeader() {
        this.refs.autocomplete.textInput.measure((ox, oy, width, height) => {
            this.state.autocomplateWidth = width;
            return;
        });
    }

    setVehicleData() {
        this.setState({
            carModel: this.props.vehicle.vehicleModel,
            carColor: this.props.vehicle.vehicleColor,
            carLicense: this.props.vehicle.vehicleLicensePlate,
            vehicleId: this.props.vehicle.vehicleId,
            vehicle: this.props.vehicle.vehicleName
        });

    }

    componentDidMount() {
        setTimeout(this.measureHeader.bind(this));
        setTimeout(this.setVehicleData.bind(this));
    }
}

const style = StyleSheet.create({
    textInputContainer: {
        position: 'absolute',
        padding: 0,
        borderWidth: 0,

    },
    carList: {
        position: 'absolute',
        top: 40,
        width: 200,

    }
});


export default connect(
    state => ({
        user: state.user,
        vehicle: state.vehicle
    }),
    dispatch => ({
        onChangeVehicle: (vehicle) => {
            dispatch({type: vehicleAction.VEHICLE_UPDATE, vehicle: vehicle});
        }
    })
)(VehicleChange);