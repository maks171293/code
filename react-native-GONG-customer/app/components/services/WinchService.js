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

export default class WinchService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenOption: 0,
            services: [
                {
                    id: '1',
                    title: 'Yes, i need a tow',
                    ico: 'Tow-black',
                    action: 'towService'
                },
                {
                    id: '2',
                    title: 'No, i do not need a tow',
                    ico: 'Winch'
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
        this.setState({chosenOption: (index == this.state.chosenOption ? 0 : index)})
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={LayoutStyle.fuelTitle}>Winch</Text>
                <LocationInput />
                <View style={LayoutStyle.fuelKindTitle}>
                    <Text style={LayoutStyle.fuelText}>After we pull the vehicle out,</Text>
                    <Text style={LayoutStyle.fuelText}>will you also need a tow?</Text>
                </View>
                <ListOptions
                    services={this.state.services}
                    chooseOption={(id)=>this.chooseOption(id)}
                    chosenOption={this.state.chosenOption} />
            </View>
        );
    }
}

