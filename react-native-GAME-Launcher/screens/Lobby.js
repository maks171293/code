import React from 'react';
import {LinearGradient} from 'expo';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import TopBar from '../components/TopBar';

export default class Lobby extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Lobby"
    }
    render() {
      return (
          <View style={styles.container}>
          <TopBar navigation={this.props.navigation}/>
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
            <Text>Lobby</Text>      
          </View>
      );
    }
  }


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