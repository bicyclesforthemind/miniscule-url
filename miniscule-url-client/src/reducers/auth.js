import { 
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    SET_EMAIL,
    SET_PASSWORD,
    SET_CONFIRM_PASSWORD
} from '../actions';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isSignup: true,
    error: {},
    email: '',
    password: '',
    confirmPassword: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSignup: !state.isSignup,
                isLoading: false
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn,
                isLoading: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn,
                isLoading: false
            };
        case LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
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