import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as UserActions from '../constants/actionsUser';
import * as LanguageActions from '../constants/actionsLanguage';

class InitialAppState extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {

        /* Define first page manually (For debug) */
        // Actions['test']();
        // return;

        /**
         * Get User from Device Storage and set it to Redux Storage
         */
        this.props.getStorageUser(user => {
            this.props.setStorageUser(user, ()=>{
                if (user.token){
                    Actions['driverGeolocation']();
                } else {
                    Actions['signUp']();
                }
            });
        });

        /**
         * Get Language from Device Storage and set it to Redux Storage
         */
        this.props.getStorageLanguage(language => {
            this.props.setStorageLanguage(language, ()=>{
            });
        });

    }

    render() {
        return <View/>
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        getStorageUser: (callback) => {
            dispatch({type: UserActions.GET_USER, callback});
        },
        setStorageUser: (value, callback) => {
            dispatch({type: UserActions.SET_USER, value, callback});
        },
        getStorageLanguage: (callback) => {
            dispatch({type: LanguageActions.GET_LANGUAGE, callback});
        },
        setStorageLanguage: (value, callback) => {
            dispatch({type: LanguageActions.SET_LANGUAGE, value, callback});
        }
    })
)(InitialAppState);
