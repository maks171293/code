import * as constants from '../constants'

let initialState = {
    games: [],
    error: null
}

export const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case constants.ON_GAMES_GET_SUCCESS:
            console.log('reducer games succes')
            return {games: action.payload, error: null};
        case constants.ON_GAMES_GET_FAIL:
            console.log('reducer games fail')
            return {games: [], error: action.payload}
        default: 
            return state;
    }
}