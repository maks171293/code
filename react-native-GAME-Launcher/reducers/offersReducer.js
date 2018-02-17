import * as constants from '../constants'

let initialState = {
    offers: [],
    error: null
}

export const offersReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.ON_OFFERS_GET_SUCCESS:
            console.log('reducer offers succes')
            return {offers: action.payload, error: null};
        case constants.ON_OFFERS_GET_FAIL:
            console.log('reducer offers fail')
            return {offers: [], error: action.payload}
        default: 
            return state;
    }
}