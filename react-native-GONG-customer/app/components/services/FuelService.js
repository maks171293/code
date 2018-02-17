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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default class FuelService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenOption: 0,
            showAmount: 0,
            services: [
                {
                    id: '1',
                    title: '90',
                    ico: 'Fuel',
                    amount: 0
                },
                {
                    id: '2',
                    title: '98',
                    ico: 'Fuel',
                    amount: 0
                },
                {
                    id: '3',
                    title: '100',
                    ico: 'Fuel',
                    amount: 0
                },
                {
                    id: '4',
                    title: 'Diesel',
                    ico: 'Fuel',
                    amount: 0
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
        let id = index == this.state.chosenOption ? 0 : index;
        this.setState({chosenOption: id, showAmount: id})
    }

    setAmount(amount, id) {
        let services = this.state.services;
        services.map((service) => {
            service.id == id ? service.amount = amount : null;
        });
        this.setState({services});
    }

    render() {
        return (
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps={true}>
                <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                    <Text style={LayoutStyle.fuelTitle}>Fuel</Text>
                    <LocationInput />
                    <View style={LayoutStyle.fuelKindTitle}>
                        <Text style={LayoutStyle.fuelText}>What kind of fuel do you need?</Text>
                    </View>
                    <ListOptions
                        setAmount={(amount, id)=>this.setAmount(amount, id)}
                        showAmount={this.state.showAmount}
                        services={this.state.services}
                        chooseOption={(id)=>this.chooseOption(id)}
                        chosenOption={this.state.chosenOption}/>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

