import { combineReducers } from 'redux';
import { newsReducer, authReducer } from './redusers';

const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
});

export default rootReducer;