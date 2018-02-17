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
    Switch,
} from 'react-native';
import icoMoonConfig from '../assets/fonts/selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import PushNotification from 'react-native-push-notification';
import {Actions, ActionConst, Scene} from 'react-native-router-flux';
const {height, width} = Dimensions.get('window');
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

export default class JobReceives extends React.Component {

    componentDidMount(){
        PushNotification.configure({
            onNotification: function(notification) {
                setTimeout(Actions.jobReceives, 200)
            },
        });
    }

    render() {
        return null;
    }
}