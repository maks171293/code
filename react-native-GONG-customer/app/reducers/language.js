import * as types from '../constants/languageType';
import * as global from '../constants/global';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

const initialState = {
    index: global.DEFAULT_LANGUAGE
};
let storage = new Storage({
    size: 100000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
});

storage.load({
    key: global.LANGUAGE,
}).then(ret => {
    if (ret.index) {
        initialState.index = ret.index
    }
});


export default function language(state = initialState, action = {}) {
    switch (action.type) {
        case types.LANGUAGE_CHANGE:
            return {
                ...state,
                index: action.index
            };
        default:
            return state;
    }
}
