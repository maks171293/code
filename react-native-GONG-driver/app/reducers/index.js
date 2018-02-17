import {combineReducers} from 'redux';
import routes from './routes';
import language from './language';
import user from './user';
import job from './job';
import registration from './registration';

export default combineReducers({
    routes,
    language,
    user,
    job,
    registration
});
