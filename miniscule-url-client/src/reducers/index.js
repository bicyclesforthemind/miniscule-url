import { combineReducers } from 'redux';

// TODO: Import reducers
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;