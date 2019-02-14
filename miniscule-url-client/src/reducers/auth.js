import { 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    LOGOUT
} from '../actions';

const initialState = {
    isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {};
        case SIGNUP_SUCCESS:
            return {};
        case SIGNUP_ERROR:
            return {};
        case LOGIN_REQUEST:
            return {};
        case LOGIN_SUCCESS:
            return {};
        case LOGIN_ERROR:
            return {};
        case LOGOUT:
            return {};
        default:
            return state;
    }
};

export default authReducer;