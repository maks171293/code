import * as constants from '../constants'

let initialState = {
    bonuses: null,
    error: null
}

export const bonusesReducer = (state = {}, action) => {
    switch(action.type){
        case constants.ON_BONUSES_RETURN_SUCCESS:
            console.log('reducer bonuses succes')
            return {bonuses: action.payload, error: null};
        case constants.ON_BONUSES_RETURN_FAIL:
            console.log('reducer bonuses fail')
            return {bonuses: null, error: action.payload}
        default: 
            return state;
    }
}