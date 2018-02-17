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

export default class JumpStartService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenOption: 0,
            services: [
                {
                    id: '1',
                    title: 'Yes',
                    ico: 'Battery',
                    action: 'towService'
                },
                {
                    id: '2',
                    title: 'No',
                    ico: 'Battery'
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
                <Text style={LayoutStyle.fuelTitle}>Jump Start</Text>
                <LocationInput />
                <View style={LayoutStyle.fuelKindTitle}>
                    <Text style={LayoutStyle.fuelText}>Did your vehicle stalled while driving</Text>
                    <Text style={LayoutStyle.fuelText}>or have already attempted jump start?</Text>
                </View>
                <ListOptions
                    services={this.state.services}
                    chooseOption={(id)=>this.chooseOption(id)}
                    chosenOption={this.state.chosenOption} />
            </View>
        );
    }
}

