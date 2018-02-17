import React from 'react';
import {LinearGradient, Constants, WebBrowser, SecureStore} from 'expo';
import { StyleSheet, Text, View, TouchableHighlight, Linking, Platform, StatusBar, WebView, BackHandler } from 'react-native';
import {connect} from 'react-redux';
import {CheckBox} from 'react-native-elements'
import * as authActions from '../actions/auth';
import * as playerActions from '../actions/player';
import api from '../services/api'

import TermsOfAgreement from '../components/TermsOfAgreement'

class Login extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        isScreenFocused: false,
        error: "",
        checked: false
    }

    onBackButtonPressAndroid = () => {
        this.props.navigation.navigate('login');
        return true;
    }

    componentWillReceiveProps(nextProps){
    }

    componentDidMount(){
        this._screenFocusListener = this.props.navigation.addListener('didFocus', () => {
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);        
            this.setState({isScreenFocused: true})
          });
        this._screenUnfocusListener = this.props.navigation.addListener('didBlur', () => {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);        
            this.setState({isScreenFocused: false})
        });
    }
    componentWillUnmount(){
        this.props.navigation.removeListener('didFocus', this._screenFocusListener)
        this.props.navigation.removeListener('didBlur', this._screenUnfocusListener)   
    }

    render() {
      return (
          <View style={styles.container}>
                <LinearGradient
                    colors={['rgb(253,128,2)', 'rgb(2,244,192)']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%',
                    }}
                    />
                <CheckBox
                    containerStyle={{ backgroundColor: 'transparent', borderWidth: 0}}
                    checked={this.state.checked}
                    title="I agree with Terms of Service"
                    onPress={()=>{this.setState({checked: !this.state.checked})}}
                    uncheckedColor="black"
                />
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('termsOfService')}>
                    <Text style={{color: 'red', fontSize: 10}}>Read Terms of Service</Text>
                </TouchableHighlight>        
          </View>
      );
    }
  }

const mapStateToProps = (state) => {
    return { 
        auth: state.auth,
        currentPlayer: state.player,
        offers: state.offers,
        games: state.games
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuthStarted: () => dispatch(authActions.onAuthStarted()),
        onAuthSuccess: (data) => dispatch(authActions.onAuthSuccess(data)),
        onAuthFailed: (error) => dispatch(authActions.onAuthFailed(error)),
        getCurrentPlayer: (sessionId) => dispatch(playerActions.onPlayerGet(sessionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    alignItems: 'center',
    width: 150,
    padding: 10,
    margin: 20,
    borderRadius: 50, 
    borderColor: '#FFF4B9',
    borderWidth: 3,
    borderStyle: 'solid'
},
text: {
    color: '#fff',
    fontSize: 20
}
});