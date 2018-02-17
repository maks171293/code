import React, {PropTypes, Component} from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from "react-native";
import  Dimensions from 'Dimensions'
const {height, width} = Dimensions.get('window');
import {Actions} from 'react-native-router-flux';

export default class Loader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: this.props.visible };
    }

    static propTypes = {
        visible: React.PropTypes.bool,
        overlayColor: React.PropTypes.string
    };

    static defaultProps = {
        visible: false,
        color: 'white',
        overlayColor: 'rgba(0, 0, 0, 0.25)'
    };

    close() {
        this.setState({ visible: false });
    }

    componentWillReceiveProps(nextProps) {
        const { visible } = nextProps;
        this.setState({ visible });
    }

    renderSpinner() {
        const { visible } = this.state;

        if (!visible)
            return (
                <View />
            );


        return (
            <View style={styles.container}>
                <View style={styles.textBlock}>
                    <Text style={styles.text}>We are looking for your position</Text>
                </View>
                <Image
                    style={styles.loaderImg}
                    source={require('../assets/images/loader.gif')}
                    resizeMode={'contain'}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.bubble, styles.button]}
                        onPress={()=>Actions.refresh({key: 'customerGeolocation', loader: 0})}>
                        <Text style={styles.continue}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }

    render() {
        return this.renderSpinner();
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    loaderImg:{
        width:350,
        flex: 1
    },
    textBlock:{
        zIndex: 20,
        position: 'absolute',
        top: 80,
        height: 25,
        left: width / 2 - 115,
    },
    text: {
        color: '#d20d1c',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
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
        position: 'absolute',
        bottom: 50,
        left: width / 2 - 80,
    },
    continue: {
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


