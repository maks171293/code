import * as constants from '../constants';


let initialState = {
    loginInProgress: false,
    loginError: null,
    sessionId: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.ON_AUTH_STARTED:
            console.log('auth start')
            return {...state, loginInProgress: true};
        case constants.ON_AUTH_SUCCESS:
            console.log('auth success')
            return {...state, loginInProgress: false, sessionId: action.payload};
        case constants.ON_AUTH_ERROR:
            console.log('auth fail')
            return {...state, loginInProgress: false, loginError: action.payload, sessionId: null};
        default: 
            return state;
    }
}
