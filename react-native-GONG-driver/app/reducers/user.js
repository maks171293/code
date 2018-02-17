import * as Actions from '../constants/actionsUser';
import * as global from '../constants/global';
import {AsyncStorage} from 'react-native';

let initialState = {
    token: "",
    user_id: "",
    driver_id: "",
    last_name: "",
    first_name: ""
};

/**
 * Storage Interface
 */
function getStorageItem (key, callback) {
    AsyncStorage.getItem(key)
        .then(res => {
            res = JSON.parse(res);
            res = (res == null) ? initialState : res;
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}
function setStorageItem (key, value, callback) {
    AsyncStorage.setItem(key, JSON.stringify(value))
        .then(res => {
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}
function updateStorageItem (key, value, callback) {
    AsyncStorage.mergeItem(key, JSON.stringify(value))
        .then(res => {
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}
function removeStorageItem (key, callback) {
    AsyncStorage.setItem(key, JSON.stringify(initialState))
        .then(res => {
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}

export default function user (state = initialState, action = {}) {
    switch (action.type) {

        case Actions.GET_USER:
            getStorageItem(global.USER, action.callback);
            return state;

        case Actions.SET_USER:
            setStorageItem(global.USER, action.value, action.callback);
            return action.value;

        case Actions.UPDATE_USER:
            updateStorageItem(global.USER, action.value, action.callback);
            return {
                ...state,
                ...action.value
            };

        case Actions.CLEAR_USER:
            removeStorageItem(global.USER, action.callback);
            return initialState;

        default:
            return state;
    }
}
