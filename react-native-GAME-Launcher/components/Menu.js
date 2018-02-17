import React from 'react';
import {Button, View, Text} from 'react-native'
import { NavigationActions } from 'react-navigation';

export default class ModalScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a screen for top tab</Text>
          <Button
            onPress={() => console.log(this.props.navigation.navigate('lobby'))}
            title="Back"
          />
        </View>
      );
    }
  }