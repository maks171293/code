import * as constants from '../constants'

let initialState = {
    info: null,
    error: null
}

export const playerReducer = (state = {}, action) => {
    switch(action.type){
        case constants.ON_PLAYER_GET_SUCCESS:
            console.log('reducer player succes')
            return {info: action.payload, error: null};
        case constants.ON_PLAYER_GET_FAIL:
            console.log('reducer player fail')
            return {info: null, error: action.payload}
        default: 
            return state;
    }
}