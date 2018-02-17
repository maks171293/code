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
import LayoutStyle from  '../styles/Layout';
import {connect} from 'react-redux';
import API from '../services/api';

//translations
import {strings} from '../utilits/localStrings.js';


class ActivateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activationKey: ''
        };
    }

    activateDriver() {
        if(this.state.activationKey){
            let data = {
                user_id: this.props.user.user_id,
                activation_key: this.state.activationKey,
            };

            API.activateDriver({data}, function (result) {
                if (result.error && result.errorKey) {
                    alert(strings['wrong key'])
                    return 0;
                } else if (!result.error) {
                    alert(strings['success'])
                }
            }.bind(this));

        }else{
            alert(strings['Enter the activation key'])
        }
    }

    render() {
        return (
            <View style={[LayoutStyle.container, LayoutStyle.containerFlex]}>
                <Text style={[LayoutStyle.fuelTitle, (Platform.OS === 'ios') ? {marginTop: 0} : {}]}>
                    {strings["Activate Account"]}
                </Text>
                <Text style={[LayoutStyle.textPolicy]}>
                    {strings["Activation key has been sent on your email."]}
                </Text>
                <Text style={[LayoutStyle.textPolicy]}>
                    {strings["Enter it to the field."]}
                </Text>
                <View style={LayoutStyle.activateView}>
                    <TextInput
                        style={[LayoutStyle.textInput, LayoutStyle.activateInput]}
                        value={ this.state.activationKey }
                        onChangeText={(text) => this.setState({activationKey: text})}
                    />
                </View>
                <View style={styles.buttonEditDetailsContainer}>
                    <TouchableOpacity
                        style={[styles.bubble, styles.button]}
                        onPress={ () => this.activateDriver()}>
                        <Text style={styles.continueBtn}>{strings["Activate"]}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.bubble, styles.button]}
                        onPress={() => alert('Send again')}>
                        <Text style={styles.continueBtn}>{strings["Send again"]}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect(
    state => ({
        user: state.user
    }),
)(ActivateAccount);

const styles = StyleSheet.create({

    button: {
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        zIndex: 12,
        // bottom: 50,
        // left: width / 2 - 80,
    },
    buttonEditDetailsContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
        zIndex: 12,
        // bottom: 110,
        // left: width / 2 - 80,
    },
    continueBtn: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '600',
    },
    bubble: {
        width: 150,
        borderColor: 'gray',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 5,
        borderWidth: 0.7,
    },
});
