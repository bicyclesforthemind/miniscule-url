import { 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    LOGOUT,
    SET_EMAIL,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD
} from '../actions';

const initialState = {
    isLoggedIn: false,
    isSignup: true,
    user: {},
    email: '',
    password: '',
    confirmPassword: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {};
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignup: !state.isSignup
            };
        case SIGNUP_ERROR:
            return {
                ...state
            };
        case LOGIN_REQUEST:
            return {
                ...state
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            };
        case LOGIN_ERROR:
            return {
                ...state
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case SET_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;