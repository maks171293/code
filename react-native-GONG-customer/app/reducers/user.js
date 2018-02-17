import * as UAction from '../constants/actionsUser';

import * as global from '../constants/global';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

const initialState = {
    token: "",
    user_id: ""
};
/**
 * load user from storage
 * @type {Storage}
 */
let storage = new Storage({
    size: 100000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
});
storage.load({
    key: global.LOGIN,
}).then(ret => {
    if (ret) {
        initialState.token = ret.token;
        initialState.user_id = ret.user_id;
    }
});


export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case UAction.UPDATE_USER:
            return action.user;

        default:
            return state;
    }
}
