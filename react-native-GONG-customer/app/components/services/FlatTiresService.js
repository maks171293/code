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

import LayoutStyle from  '../../styles/Layout'
import LocationInput from  './components/LocationInput';
import ListOptions from  './components/ListOptions';
import {Actions} from 'react-native-router-flux';

export default class FlatTiresService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenOption: 0,
            services: [
                {
                    id: '1',
                    title: 'I do not have a spare',
                    ico: 'Tyres',
                    action: 'towService'
                },
                {
                    id: '2',
                    title: 'I do not have a jack',
                    ico: 'Tyres'
                },
                {
                    id: '3',
                    title: 'I have wheel locks but do not have keys',
                    ico: 'Tyres'
                },
            ]
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.doShow();
        }, 0);
    }

    chooseOption(index) {
        this.setState({chosenOption: (index == this.state.chosenOption ? 0 : index)});
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={LayoutStyle.fuelTitle}>Flat Tires</Text>
                <LocationInput />
                <View style={LayoutStyle.fuelKindTitle}>
                    <Text style={LayoutStyle.fuelText}>Select Details</Text>
                </View>
                <ListOptions
                    services={this.state.services}
                    chooseOption={(id)=>this.chooseOption(id)}
                    chosenOption={this.state.chosenOption} />
            </View>
        );
    }
}

