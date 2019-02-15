const API_URL = ''; // TODO: Fill this api url once the backend is running. 

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT = 'LOGOUT';

const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

const signupSuccess = ({username, password}) => ({
    type: SIGNUP_SUCCESS,
    payload: {
        username,
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

const loginSuccess = ({username, password}) => ({
    type: LOGIN_SUCCESS,
    payload: {
        username,
        password
    }
});

const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error
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
                email,
                password
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
                email,
                password
            })
        })
        .then((response) => dispatch(loginSuccess(response)))
        .catch((error) => dispatch(loginError(error)));
    };
};

export const logout = () => ({
    type: LOGOUT
});