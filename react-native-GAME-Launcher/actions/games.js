import * as constants from '../constants';

export const onGamesGet = () => {
   return {type: constants.ON_GAMES_GET}
};
export const onGamesGetSuccess = (data) => ({type: constants.ON_GAMES_GET_SUCCESS, payload: data});
export const onGamesGetFail = (error) => ({type: constants.ON_GAMES_GET_FAIL, payload: error}); 