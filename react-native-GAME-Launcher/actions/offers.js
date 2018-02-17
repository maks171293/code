import * as constants from '../constants';

export const onOffersGet = () => {
   return {type: constants.ON_OFFERS_GET}
};
export const onOffersGetSuccess = (data) => ({type: constants.ON_OFFERS_GET_SUCCESS, payload: data});
export const onOffersGetFail = (error) => ({type: constants.ON_OFFERS_GET_FAIL, payload: error}); 