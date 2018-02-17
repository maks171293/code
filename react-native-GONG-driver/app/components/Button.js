import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.button, this.props.type2 ? styles.type2 : null, this.props.style]}
                onPress={this.props.onPress}
            >
                <Text style={[styles.text, this.props.type2 ? styles.textType2 : null]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#d42127',
        marginHorizontal: 10,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    type2: {
        backgroundColor: 'transparent',
        borderColor: '#d42127',
        borderWidth: 1.5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400'
    },
    textType2: {
        color: '#d42127',
    }
});
