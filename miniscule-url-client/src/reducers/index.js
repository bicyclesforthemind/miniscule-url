import { combineReducers } from 'redux';

// TODO: Import reducers
import authReducer from './auth';
import urlReducer from './url';

const rootReducer = combineReducers({
    auth: authReducer,
    url: urlReducer
});

export default rootReducer;