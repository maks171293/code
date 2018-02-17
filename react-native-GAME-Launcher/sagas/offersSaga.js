import { call, put, takeEvery, all} from 'redux-saga/effects'
import * as constants from '../constants'
import * as offersActions from '../actions/offers'
import api from '../services/api'

//Worker Saga
export function* getAllOffersAsync(){
    try{
        //try to call api
        const response = yield call(api.fetchAllOffers)
        console.log('saga offers success', response)
        yield put(offersActions.onOffersGetSuccess(response));
    } catch (e){
        //act on the error
        console.log('saga offers fail')
        yield put(offersActions.onOffersGetFail(e))
    }
}

// Watcher Saga! Spawn a new task on each ACTION
export function* watchGetAllOffers(){
    yield takeEvery(constants.ON_OFFERS_GET, getAllOffersAsync)
}

