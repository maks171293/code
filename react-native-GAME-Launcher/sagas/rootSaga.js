import { all } from 'redux-saga/effects';
import {watchGetCurrentPlayer} from './sagas';
import {watchGetAllGames} from './gamesSaga';
import {watchGetAllOffers} from './offersSaga';
import {watchBonusesReturn} from './bonusesSaga';

//entry point to start all sagas at once
export default function* rootSaga(){
    yield all([
        watchGetCurrentPlayer(),
        watchGetAllGames(),
        watchGetAllOffers(),
        watchBonusesReturn()
    ])
}