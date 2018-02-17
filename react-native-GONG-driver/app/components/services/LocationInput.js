// LocationInput
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
import {connect} from 'react-redux';
import Icon from '../../assets/svg/svg';
import LayoutStyle from  '../../styles/Layout';

// const pointImage = require('../../assets/images/mark_loc.png');
// const pointImage2 = require('../../assets/images/mark_dest.png');
// const checkImage = require('../../assets/images/check.png');

class LocationInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addressCheck: 0,
        };
    }

    componentDidMount() {
        if (this.props.text) {
            this.setState({addressCheck: 1})
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>

                {this.props.type2 ?
                    <Icon
                        style={styles.pointImage}
                        name="mark_dest"
                    />
                    :
                    <Icon
                        style={styles.pointImage}
                        name="mark_loc"
                    />
                }


                <TextInput
                    style={styles.textInput}
                    value={typeof this.props.text !== 'undefined' ? this.props.text : this.props.geolocation.geocode}
                    editable={false}
                    underlineColorAndroid='transparent'
                >
                </TextInput>

                {this.state.addressCheck != 0 ?
                    <Icon
                        style={styles.checkImage}
                        name="check"
                    />
                    :
                    null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a7a7a7',
        backgroundColor: 'rgb(255, 255, 255)',
        height: 25,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointImage: {
        width: 15,
        height: 15,
        marginHorizontal: 10,
    },
    checkImage: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    textInput: {
        fontSize: 14,
        flex: 1,
        color: '#949494',
        paddingVertical: 0,
        textAlignVertical: 'center',
        ...Platform.select({android: {alignSelf: 'stretch'}}),
    },

});

export default connect(
    state => ({
        geolocation: state.geolocation,
    }),
)(LocationInput);
