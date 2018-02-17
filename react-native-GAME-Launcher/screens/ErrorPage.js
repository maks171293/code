import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo';
import {connect} from 'react-redux';

export default class ErrorPage extends React.Component {
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
            <Text>ErrorPage</Text>
          </View>
      );
    }
  }



// export default connect(null, null)(Loading)

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