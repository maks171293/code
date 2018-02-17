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
    AsyncStorage,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import API from '../services/api'
import LayoutStyle from  '../styles/Layout'
import LocationInput from  './services/components/LocationInput';

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Storage from 'react-native-storage';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const {width, height} = Dimensions.get('window');

export default class RoadsideService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDrop: 0,
            services: [
                {
                    id: '1',
                    title: 'I need fuel',
                    icon: 'Fuel',
                    action: 'fuelService'
                },
                {
                    id: '2',
                    title: 'Tow',
                    icon: 'Tow',
                    action: 'towService'
                },
                {
                    id: '3',
                    title: 'Winch',
                    icon: 'Winch',
                    action: 'winchService'
                },
                {
                    id: '4',
                    title: 'Winch and tow',
                    icon: 'Winch-and-tow',
                    action: 'towService'
                },
                {
                    id: '5',
                    title: 'Locked out',
                    icon: 'Lock',
                    action: 'lockedService'
                },
                {
                    id: '6',
                    title: 'Jump Start',
                    icon: 'Battery',
                    action: 'jumpStartService'
                },
                {
                    id: '7',
                    title: 'Flat Tires',
                    icon: 'Tyres',
                    action: 'flatTiresService'
                },
            ]
        };

        this.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
        });
    }

    showDrop(index) {
        this.setState({showDrop: (index == this.state.showDrop ? 0 : index)})
    }

    serviceToStorage(service) {

        this.storage.save({
            key: 'service',
            rawData: {
                id: service.id,
                title: service.title,
            },
            expires: 100000 * 3600 * 24
        });

        setTimeout(Actions[service.action], 200);
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <LocationInput />
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps={true}>
                {this.state.services.map((service) => {
                    return (
                        <View key={service.id}>
                            <TouchableOpacity style={LayoutStyle.demandService}
                                              onPress={() => this.showDrop(service.id)}>
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
                                        onPress={()=>this.serviceToStorage(service)}>
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

