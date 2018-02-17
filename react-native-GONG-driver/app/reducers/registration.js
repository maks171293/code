import * as Action from '../constants/actionsRegistration';

const initialState = {};

export default function registration (state = initialState, action = {}) {

    switch (action.type) {
        case Action.UPDATE_PAGE_FIELDS:
            console.log({
                ...state,
                [action.page]: action.data
            });

            return {
                ...state,
                [action.page]: action.data
            };
        case Action.CLEAR_PAGE_FIELDS:
            return initialState;

        default:
            return state;
    }

}