import { call, put, takeEvery, all} from 'redux-saga/effects'
import * as constants from '../constants'
import * as playerActions from '../actions/player'
import api from '../services/api'
import { SecureStore } from 'expo'

//Worker Saga
export function* getCurrentPlayerAsync(action){
    try{
        //try to call api
        console.log('saga player success')
        const response = yield call(api.fetchCurrentPlayer, action.payload)
        console.log('player', response)
        yield put(playerActions.onPlayerGetSuccess(response));
    } catch (e){
        //act on the error
        console.log('saga player fail')
        yield put(playerActions.onPlayerGetFail(e))
    }
}

// Watcher Saga! Spawn a new task on each ACTION
export function* watchGetCurrentPlayer(){
    yield takeEvery(constants.ON_PLAYER_GET, getCurrentPlayerAsync)
}

