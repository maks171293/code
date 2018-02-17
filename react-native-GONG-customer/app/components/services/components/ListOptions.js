import  React, {Component} from 'react';
import  {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TextInput,
    Image,
    Dimensions,
    AsyncStorage
} from 'react-native';

import LayoutStyle from  '../../../styles/Layout'
import {Actions} from 'react-native-router-flux';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../assets/fonts/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
export default class ListOptions extends React.Component {

    render() {
        let chosenOption = this.props.chosenOption;
        return (
            <View>
                {this.props.services.map((service) => {
                    return (
                        <View key={service.id}
                              style={ chosenOption == service.id ? LayoutStyle.selectBackground : null}>
                            <TouchableOpacity style={LayoutStyle.demandService}
                                              onPress={service.action ? Actions[service.action] : ()=>this.props.chooseOption(service.id)}>
                                <Icon size={40}
                                      name={service.ico}
                                      fontSize="2"
                                      style={LayoutStyle.demandServiceIcon}/>
                                <Text style={LayoutStyle.fontColor}>
                                    {service.title}
                                </Text>
                            </TouchableOpacity>
                            {this.props.showAmount == service.id ?
                                <View
                                    style={[LayoutStyle.demandDescription, LayoutStyle.fuelDescription]}>
                                    <Text
                                        style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>
                                        Amount of fuel:
                                    </Text>
                                    <TextInput
                                        style={[LayoutStyle.textInput, LayoutStyle.amountInput]}
                                        value={service.amount}
                                        maxLength={3}
                                        keyboardType='numeric'
                                        onChangeText={(text)=>this.props.setAmount(text, service.id)}
                                    />
                                    <Text style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>L.</Text>
                                </View>
                                : null}
                        </View>
                    )
                })}
            </View>
        );
    }
}

