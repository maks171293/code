import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { LinearGradient, SecureStore } from 'expo';
import {connect} from 'react-redux';
import * as playerActions from '../actions/player'
import * as gamesActions from '../actions/games'
import * as offersActions from '../actions/offers'
import * as bonusesActions from '../actions/bonuses'

class Loading extends React.Component {
    state = {
        isScreenFocused: false,
        loaded: false,
        isPlayerAuthenticated: false,
        sessionId: null
    }
    checkSessionId = async () => {
        let sessionId = await SecureStore.getItemAsync('sessionId');
        this.setState({sessionId})
        if(sessionId && sessionId.length > 0){
            this.props.getCurrentPlayer(sessionId);        
        }else{
            setTimeout(()=> this.props.navigation.navigate('login'), 3000);
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.currentPlayer !== nextProps.currentPlayer){
            if(nextProps.currentPlayer.error === null){
                this.props.getAllGames();
                this.props.getAllOffers();
                if(this.state.sessionId && this.state.sessionId !== null){
                    this.props.returnBonuses(this.state.sessionId);
                }
                
            }
        }
        if(this.props.allGames !== nextProps.allGames){
            if(nextProps.allGames.error === null){
                this.props.navigation.navigate('welcome')
            }
        }
    }

    componentDidMount(){
        this._screenFocusListener = this.props.navigation.addListener('didFocus', () => {
            this.checkSessionId();
          });
    }
    componentWillUnmount(){
        this.props.navigation.removeListener('didFocus', this._screenFocusListener)
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
                >
            </LinearGradient>
            <Image
                source={require('../assets/icon1.png')}
            />
            <ActivityIndicator size="large" color="rgb(253,128,2)" />
          </View>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
        sessionId: state.auth.sessionId,
        currentPlayer: state.player,
        allGames: state.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrentPlayer: (sessionId) => dispatch(playerActions.onPlayerGet(sessionId)),
        getAllGames: () => dispatch(gamesActions.onGamesGet()),
        getAllOffers: () => dispatch(offersActions.onOffersGet()),
        returnBonuses: (sessionId) => dispatch(bonusesActions.onBonusesReturn(sessionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
},
loadingText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20
}
});