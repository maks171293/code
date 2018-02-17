import { call, put, takeEvery, all} from 'redux-saga/effects'
import * as constants from '../constants'
import * as bonusesActions from '../actions/bonuses'
import api from '../services/api'

//Worker Saga
export function* getBonusesReturnAsync(action){
    try{
        //try to call api
        console.log('saga bonuses success')
        const response = yield call(api.fetchBonuses, action.payload)
        console.log('bonuses', response)
        yield put(bonusesActions.onBonusesReturnSuccess(response));
    } catch (e){
        //act on the error
        console.log('saga bonuses fail')
        yield put(bonusesActions.onBonusesReturnFail(e))
    }
}

// Watcher Saga! Spawn a new task on each ACTION
export function* watchBonusesReturn(){
    yield takeEvery(constants.ON_BONUSES_RETURN, getBonusesReturnAsync)
}

