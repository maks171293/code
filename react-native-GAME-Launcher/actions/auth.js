import * as constants from '../constants';

export const onAuthStarted = () => ({type: constants.ON_AUTH_STARTED});
export const onAuthSuccess = (data) => ({type: constants.ON_AUTH_SUCCESS, payload: data});
export const onAuthFailed = (error) => ({type: constants.ON_AUTH_ERROR, payload: error}); 