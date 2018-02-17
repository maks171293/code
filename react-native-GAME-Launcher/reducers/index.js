import {combineReducers} from 'redux'
import {authReducer} from './authReducer'
import {playerReducer} from './playerReducer'
import {gamesReducer} from './gamesReducer'
import {offersReducer} from './offersReducer'
import {bonusesReducer} from './bonusesReducer'

export default combineReducers({
    auth: authReducer,
    player: playerReducer,
    games: gamesReducer,
    offers: offersReducer,
    bonuses: bonusesReducer
})