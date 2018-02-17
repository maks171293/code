import { call, put, takeEvery, all} from 'redux-saga/effects'
import * as constants from '../constants'
import * as gamesActions from '../actions/games'
import api from '../services/api'

//Worker Saga
export function* getAllGamesAsync(){
    try{
        //try to call api
       
        const response = yield call(api.fetchAllGames)
        console.log('saga games success', response)
        yield put(gamesActions.onGamesGetSuccess(response));
    } catch (e){
        //act on the error
        console.log('saga games fail')
        yield put(gamesActions.onGamesGetFail(e))
    }
}

// Watcher Saga! Spawn a new task on each ACTION
export function* watchGetAllGames(){
    yield takeEvery(constants.ON_GAMES_GET, getAllGamesAsync)
}

