import {combineReducers} from 'redux';
import routes from './routes';
import language from './language';
import user from './user';
import vehicle from './vehicle';

export default combineReducers({
    routes,
    language,
    user,
    vehicle
});
