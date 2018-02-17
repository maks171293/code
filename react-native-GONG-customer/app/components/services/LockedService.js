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

export default class LockedService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenOption: 0,
            services: [
                {
                    id: '1',
                    title: 'Kyes are lost or broken',
                    ico: 'Tow-black'
                },
                {
                    id: '2',
                    title: 'Kyes are locked in the car',
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
                <Text style={LayoutStyle.fuelTitle}>Locked out</Text>
                <LocationInput />
                <View style={LayoutStyle.fuelKindTitle}>
                    <Text style={LayoutStyle.fuelText}>What is the problem</Text>
                </View>
                <ListOptions
                    services={this.state.services}
                    chooseOption={(id)=>this.chooseOption(id)}
                    chosenOption={this.state.chosenOption} />
            </View>
        );
    }
}

