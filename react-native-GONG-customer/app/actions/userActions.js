import * as types from '../constants/actionsUser';

export function loginSuccess() {
    return {
        type: types.UPDATE_USER
    };
}