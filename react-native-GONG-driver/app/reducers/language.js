import * as LanguageActions from '../constants/actionsLanguage';
import * as global from '../constants/global';
import {AsyncStorage} from 'react-native';

const initialState = {
    index: global.DEFAULT_LANGUAGE_ID,
};

/**
 * Storage Interface
 */
// AsyncStorage.clear();
function getStorageItem (key, callback = ()=>{}) {
    AsyncStorage.getItem(key)
        .then(res => {
            res = JSON.parse(res);
            console.log('res',res);
            res = (res == null) ? initialState : res;
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}
function setStorageItem (key, value, callback = ()=>{}) {
    AsyncStorage.setItem(key, JSON.stringify(value))
        .then(res => {
            callback(res);
        })
        .catch(err => {
            console.log('Storage error', err);
        });
}

export default function language(state = initialState, action = {}) {
    switch (action.type) {
        case LanguageActions.GET_LANGUAGE:
            getStorageItem(global.LANGUAGE, action.callback);
            return state;

        case LanguageActions.SET_LANGUAGE:
            setStorageItem(global.LANGUAGE, action.value, action.callback);
            return {
                ...state,
                ...action.value
            };
        default:
            return state;
    }
}
