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

const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

const signupError = () => ({
    type: SIGNUP_ERROR
});

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

const loginError = () => ({
    type: LOGIN_ERROR
});

const signup = (email, password) => {};

const login = (email, password) => {};

const logout = () => ({
    type: LOGOUT
});