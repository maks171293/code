import React from 'react';
import {LinearGradient, Constants, WebBrowser, SecureStore} from 'expo';
import { StyleSheet, Text, View, TouchableHighlight, Linking, Platform, StatusBar, WebView } from 'react-native';
import {connect} from 'react-redux';
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
        auth: false,
        result: null,
        sessionId: "du5ekq0WbT1EiN20O174p3DVWKubqGdJZCmMrf_rwaY=",
        error: "",
        checked: false
    }

    getCurrentPlayer = () => {
        this.props.getCurrentPlayer(this.state.sessionId);   
    }
    
    handleOpenURL = (event) => {
        if(event.url.indexOf('?s=') !== -1){
            let parsedUrl = event.url.slice(event.url.indexOf('?s=')+3);
            SecureStore.setItemAsync('sessionId', parsedUrl);
            this.props.onAuthSuccess(parsedUrl);
            //check the player
            this.props.getCurrentPlayer(parsedUrl);
        }
        WebBrowser.dismissBrowser();
    }

    loginWithGoogle = async () => {
        this.props.onAuthStarted();

        Linking.addEventListener('url', this.handleOpenURL);

        let result = await WebBrowser.openAuthSessionAsync('https://codepen.io/maks171293/pen/VQjmmb');
        if(result.type === 'cancel'){
            this.props.onAuthFailed('Login cancelled.');
        }
        
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    loginWithFacebook = async () => {
        // this.props.navigation.navigate('welcome');
        // let sessionId = await SecureStore.getItemAsync('sessionId')
    }

    componentWillReceiveProps(nextProps){
        if(this.props.currentPlayer !== nextProps.currentPlayer){
            if(nextProps.currentPlayer.error === null && nextProps.currentPlayer.info){
                if(this.state.isScreenFocused && this.props.navigation.state.routeName === 'login'){
                    !nextProps.currentPlayer.info.tos_agreed ? this.props.navigation.navigate('termsAgreement') : this.props.navigation.navigate('welcome');
                }
            }
        }
    }

    componentDidMount(){
        this._screenFocusListener = this.props.navigation.addListener('didFocus', () => {
            this.setState({isScreenFocused: true})
          });
        this._screenUnfocusListener = this.props.navigation.addListener('didBlur', () => {
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
                    <Text style={styles.text}>Please log in with</Text>
                <TouchableHighlight style={styles.button} onPress={this.loginWithGoogle}>
                    <Text style={styles.text}>GOOGLE</Text>
                </TouchableHighlight>
                <Text style={styles.text}>or</Text>
                <TouchableHighlight style={styles.button} onPress={this.loginWithFacebook}>
                    <Text style={styles.text}>FACEBOOK</Text>
                </TouchableHighlight>   
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('termsAgreement')}>
                    <Text style={{color: 'red', fontSize: 10}}>Read Terms of Service</Text>
                </TouchableHighlight>        
                {this.state.result ? (
                <Text>{JSON.stringify(this.state.error)}</Text>
                ) : null}
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