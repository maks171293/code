import * as constants from '../constants';

export const onPlayerGet = (sessionId) => ({type: constants.ON_PLAYER_GET, payload: sessionId});
export const onPlayerGetSuccess = (data) => ({type: constants.ON_PLAYER_GET_SUCCESS, payload: data});
export const onPlayerGetFail = (error) => ({type: constants.ON_PLAYER_GET_FAIL, payload: error}); 