import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import Icon from '../assets/svg/svg';
import * as ActionR from '../constants/actionsRoute';

const menuHeight = 50;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.renderBackButton = this.renderBackButton.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
    }

    renderBackButton() {
        return (
            <TouchableOpacity
                style={styles.menuButton}
                onPress={ () => {
                    if (this.props.route.disabledDrawer) return;

                    if (this.props.route.backButton) {
                        this.props.doBack();
                        Actions[this.props.route.backButton.route](this.props.route.backButton.props);
                        return;
                    }
                    Actions[this.props.renderBackButton]();
                }}
            >
                <Icon name="arrowBack"/>
            </TouchableOpacity>
        );
    }

    renderMenuButton() {
        return (
            <TouchableOpacity
                style={styles.menuButton}
                onPress={ () => {
                    if (!this.props.route.disabledDrawer) {
                        Actions.refresh({key: 'drawer', open: value => !value})
                    }
                }}
            >
                <Icon name="menu"/>
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <View
                style={styles.container}
            >
                { (this.props.renderBackButton || this.props.route.backButton) ?
                    this.renderBackButton()
                    :
                    this.renderMenuButton()
                }
                <View style={styles.logo}>
                    <Icon name="logo"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderBottomColor: '#e6e6e6',
        height: menuHeight,
        flexDirection: 'row',
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
    },
    menuButtonImage: {
        transform: [{rotate: '90deg'}],
        width: 25,
        height: 25,
    },
    menuButtonIcon: {
        color: 'black'
    },
    logo: {
        flex: 1,
        marginRight: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 80,
    }
});

export default connect (
    state => ({
        route: state.routes,
    }),
    dispatch => ({
        doBack: () => {
            dispatch({
                type: ActionR.DO_ROUTE,
            })
        }
    })
)(NavBar);