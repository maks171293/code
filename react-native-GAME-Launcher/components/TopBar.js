import React from 'react';
import {LinearGradient} from 'expo';
import { StyleSheet, Text, View, Button, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TabNavigator, StackNavigator } from 'react-navigation';

// const windowWidth 
export default class TopBar extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        const {routeName} = this.props.navigation.state;
      return (
          <View style={styles.topBar}>
            <View style={styles.container}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('MyModal')}>
                <Text style={styles.text}>Menu</Text>
            </TouchableHighlight>   
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('MyModal')}>
                <Text style={styles.text}>Inbox</Text>
            </TouchableHighlight>   
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('MyModal')}>
                <Text style={styles.text}>Player Icon</Text>
            </TouchableHighlight>   
            <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('MyModal')}>
                <Text style={styles.text}>Current</Text>
            </TouchableHighlight>   
            </View>
            
          </View>
      );
    }
  }


const styles = StyleSheet.create({
topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#444',
    zIndex: 10,
    paddingTop: 27
},
container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around'
},
button: {
    alignItems: 'center',
    padding: 10,
    margin: 20,
},
text: {
    color: '#fff',
    fontSize: 15
}
});