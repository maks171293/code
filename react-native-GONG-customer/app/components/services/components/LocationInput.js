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
import Storage from 'react-native-storage';
import  LayoutStyle from  '../../../styles/Layout'
export default class LocationInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressCheck: 0,
            location: 'London, Upper Bringhton str. 22. NW10 7',
        };

        this.storage = new Storage({
            size: 1000,
            storageBackend: AsyncStorage,
            defaultExpires: 1000 * 3600 * 24,
            enableCache: true,
            sync: {}
        })
    }

    componentDidMount() {
        this.storage.load({
            key: 'region',
        }).then(ret => {
            console.log(ret, 'ret');
            let geocode = ret.geocode != 0 ? ret.geocode : 'Location doesn`t chosen';
            let addressCheck = ret.geocode != 0;
            this.setState({location: geocode, addressCheck});
        }).catch(err => {
            console.warn(err);
            switch (err.name) {
                case 'NotFoundError':
                    break;
                case 'ExpiredError':
                    break;
            }
        });
    }

    render() {
        return (
                <View style={LayoutStyle.demandView}>
                    <TextInput
                        style={[LayoutStyle.textInput, LayoutStyle.demandInput]}
                        value={this.state.location}
                    />
                    <Image source={require('../../../assets/images/position.png')}
                           resizeMode={'stretch'}
                           style={LayoutStyle.demandPosition}/>
                    {
                        this.state.addressCheck != 0 ?
                            <Image source={require('../../../assets/images/check.png')}
                                   resizeMode={'stretch'}
                                   style={LayoutStyle.demandCheck}/>
                            : null
                    }
                </View>

        );
    }
}

