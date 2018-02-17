import React, { Component, PropTypes } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View } from 'react-native-animatable'

const DEFAULT_SIZE_MULTIPLIER = 0.7
const DEFAULT_OUTER_BORDER_WIDTH_MULTIPLIER = 0.2

export default class RadioButton extends React.Component {
    // static propTypes = {
    //     size: PropTypes.number,
    //     innerColor: PropTypes.string,
    //     outerColor: PropTypes.string,
    //     isSelected: PropTypes.bool,
    //     onPress: PropTypes.func
    // }

    // static defaultProps = {
    //     size: 16,
    //     innerColor: 'dodgerblue',
    //     outerColor: 'dodgerblue',
    //     isSelected: false,
    //     onPress: () => null
    // }

    render () {
        const { size, innerColor, outerColor, isSelected, onPress } = this.props;
        // const outerStyle = {
        //     borderColor: outerColor,
        //     width: size + size * DEFAULT_SIZE_MULTIPLIER,
        //     height: size + size * DEFAULT_SIZE_MULTIPLIER,
        //     borderRadius: (size + size * DEFAULT_SIZE_MULTIPLIER) / 2,
        //     borderWidth: 1
        // }

        // const innerStyle = {
        //     width: size,
        //     height: size,
        //     borderRadius: size / 2,
        //     backgroundColor: innerColor
        // }

        return (
            <TouchableOpacity style={[styles.radio, {/*outerStyle*/}]} onPress={onPress}>
                <View style={[styles.button, {/*innerStyle*/}, isSelected ? {backgroundColor: '#47ab4b', borderColor: '#47ab4b', borderWidth: 1} : null]} {...this.props} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 23,
        height: 23,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#dcdcdc",
    },
    radio: {
        // backgroundColor: 'lime',
        justifyContent: 'center',
        alignItems: 'center',

    }
})
