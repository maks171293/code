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
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import LayoutStyle from  '../styles/Layout'

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    id: '1',
                    title: 'Contact us',
                    icon: 'Phone',
                    action: 'contactUs'
                },
                {
                    id: '2',
                    title: 'Visit our site',
                    icon: 'Tow',
                    action: ''
                },
                {
                    id: '3',
                    title: 'View our terms of business',
                    icon: 'Winch',
                    action: 'terms'
                }
            ]
        };
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={[LayoutStyle.fuelTitle]}>About us</Text>
                <View style={{textAligin: 'left',
                    borderColor: '#d0d0d0',
                    borderBottomWidth: 1,
                    borderTopWidth: 1, paddingTop: 15}}>
                    <Text style={[LayoutStyle.aboutUsText]}>Our mission is to provide the quockest and most transparency on-demand roadside assitance
                        service when you need it most.</Text>
                    <Text style={[LayoutStyle.aboutUsText]}>With GONG you'll always know what's happening as we get back on your way in a flash.</Text>
                    <Text style={[LayoutStyle.aboutUsText]}>Made with your safery in mind in London, UK</Text>
                </View>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps={true}>
                {this.state.services.map((service) => {
                    return (
                        <View key={service.id}>
                            <TouchableOpacity style={LayoutStyle.demandService} onPress={Actions[service.action]}>
                                <Icon size={40}
                                      name={service.icon}
                                      fontSize="2"
                                      style={LayoutStyle.demandServiceIcon}/>
                                <Text style={LayoutStyle.fontColor}>
                                    {service.title}
                                </Text>
                            </TouchableOpacity>
                            {this.state.showDrop == service.id ?
                                <View
                                    style={LayoutStyle.demandDescription}>
                                    <Text
                                        style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>
                                        Uneven vehicles do not drive.
                                    </Text>
                                    <Text
                                        style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>
                                        We get you out and back on track
                                    </Text>
                                    <Text
                                        style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>
                                        and tow you to nearest services or to
                                    </Text>
                                    <Text
                                        style={[LayoutStyle.fontSize12, LayoutStyle.fontColor]}>
                                        your destination.
                                    </Text>
                                    <TouchableOpacity
                                        style={[LayoutStyle.demandBubble, LayoutStyle.demandButton]}
                                        onPress={Actions[service.action]}>
                                        <Text style={LayoutStyle.demandContinue}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                                : null}
                        </View>
                    )
                })}
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

