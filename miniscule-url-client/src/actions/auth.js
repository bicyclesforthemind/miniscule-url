const API_URL = ''; // TODO: Fill this api url once the backend is running. 

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';

const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

const signupSuccess = ({email, password}) => ({
    type: SIGNUP_SUCCESS,
    payload: {
        email,
        password
    }
});

const signupError = (error) => ({
    type: SIGNUP_ERROR,
    payload: error
});

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = ({email, password}) => ({
    type: LOGIN_SUCCESS,
    payload: {
        email,
        password
    }
});

const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
});

const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
});

const logoutError = (error) => ({
    type: LOGOUT_ERROR,
    payload: error
});

export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email
});

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
});

export const setConfirmPassword = (confirmPassword) => ({
    type: SET_CONFIRM_PASSWORD,
    payload: confirmPassword
});

export const signup = (email, password) => {
    return (dispatch) => {
        dispatch(signupRequest());

        return fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ 
                user: {
                    email,
                    password
                }
            })
        })
        .then((response) => dispatch(signupSuccess(response)))
        .catch((error) => dispatch(signupError(error)));
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());

        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({ 
                user: {
                    email,
                    password
                }
            })
        })
        .then((response) => {
            // localStorage.setItem('user', ); // Set auth header 
            dispatch(loginSuccess(response));
        })
        .catch((error) => dispatch(loginError(error)));
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutRequest());

        return fetch(`${API_URL}/logout`, {
            method: 'DELETE',
            headers: {
            },
            mode: 'cors'
        })
        .then((response) => dispatch(logoutSuccess()))
        .catch((error) => dispatch(logoutError(error)));
    };
};