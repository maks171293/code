import * as types from '../constants/languageType';

export function languageChange() {
    return {
        type: types.LANGUAGE_CHANGE
    };
}