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
import API from '../services/api'
import LayoutStyle from  '../styles/Layout'

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../assets/fonts/selection.json';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import MapView from 'react-native-maps';
const dismissKeyboard = require('dismissKeyboard');
const Icon = createIconSetFromIcoMoon(icoMoonConfig);
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    id: '1',
                    title: '+111-11-111-11-11',
                    icon: 'Phone'
                },
                {
                    id: '2',
                    title: 'gong@gmail.com',
                    icon: 'Mail'
                },
                {
                    id: '3',
                    title: '+222-22-222-22-22',
                    icon: 'Calendar'
                }
            ],
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            text: ''
        };
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={[LayoutStyle.fuelTitle]}>Contact Us</Text>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps={true}>
                    <MapView
                        provider={this.props.provider}
                        style={styles.map}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        pitchEnabled={false}
                        rotateEnabled={false}
                        initialRegion={this.state.region}
                    >
                        <MapView.Marker
                            title="This is a title"
                            description="This is a description"
                            coordinate={this.state.region}
                        />
                    </MapView>
                    {this.state.services.map((service) => {
                        return (
                            <View key={service.id} style={LayoutStyle.contactUsText}>
                                <Icon size={40}
                                      name={service.icon}
                                      fontSize="2"
                                      style={LayoutStyle.demandServiceIcon}/>
                                <Text style={LayoutStyle.fontColor}>
                                    {service.title}
                                </Text>
                            </View>
                        )
                    })}
                    <View style={{

                        margin: 0,
                        borderWidth: 1,
                        paddingLeft: 5,
                        borderColor: 'gray',
                        borderRadius: 3,
                        padding: 0,
                        paddingRight: 3,
                        paddingBottom: 0,
                        marginBottom: 0,
                        width: width - 20,
                        marginLeft: 10,
                        marginBottom: 20
                    }}>
                        <TextInput
                            style={{
                                textAlignVertical: 'top',
                                width: 200,
                                fontSize: 14,
                                backgroundColor: 'white',
                                borderRadius: 3,
                                margin: 0,
                                marginBottom: 0,
                                paddingLeft: 3,
                                color: '#949494'
                            }}
                            onChangeText={(text) => this.setState({text: text})}
                            numberOfLines={5}
                            onBlur={()=>dismissKeyboard()}
                            onSubmitEditing={()=>dismissKeyboard()}
                            multiline={true}
                            placeholder='Interactive contact form'
                            value={this.state.text}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    map: {
        width: width,
        height: 250,
    },
});