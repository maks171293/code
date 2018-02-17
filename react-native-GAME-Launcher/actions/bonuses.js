import * as constants from '../constants';

export const onBonusesReturn = (sessionId) => ({type: constants.ON_BONUSES_RETURN, payload: sessionId});
export const onBonusesReturnSuccess = (data) => ({type: constants.ON_BONUSES_RETURN_SUCCESS, payload: data});
export const onBonusesReturnFail = (error) => ({type: constants.ON_BONUSES_RETURN_FAIL, payload: error}); 