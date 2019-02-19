import axios from 'axios';

const API_URL = `http://localhost:3001`; // TODO: Fill this api url once the backend is running. 

const REQUEST_HEADERS = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

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
export const SET_IS_SIGNUP = 'SET_IS_SIGNUP';
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const SET_ERROR = 'SET_ERROR';

const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

const signupError = (error) => ({
    type: SIGNUP_ERROR,
    payload: error
});

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = () => ({
    type: LOGIN_SUCCESS
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

export const setIsSignup = (isSignup) => ({
    type: SET_IS_SIGNUP,
    payload: isSignup
});

export const setAuthToken = (authToken) => ({
    type: SET_AUTH_TOKEN,
    payload: authToken
}); 

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
});

export const signup = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(signupRequest());
            
            const response = await axios.post(`${API_URL}/signup`, {
                user: {
                    email, 
                    password
                }
            }, REQUEST_HEADERS);

            console.log(response);

            dispatch(signupSuccess());
        }
        catch (error) {
            dispatch(signupError({
                header: 'Invalid Signup Credientials',
                content: 'Please try again.'
            }));
        }
    };
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest());

            const response = await axios.post(`${API_URL}/login`, {
                user: {
                    email,
                    password
                }
            }, REQUEST_HEADERS);

            // dispatch(setAuthToken(response.headers.authorization));
            localStorage.setItem('user', response.headers.authorization);
            dispatch(loginSuccess());
        }
        catch (error) {
            console.log(API_URL);
            dispatch(loginError({
                header: 'Invalid Signin Credientials',
                content: 'Please try again.'
            }));
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        try {
            dispatch(logoutRequest());

            const response = await axios.delete(`${API_URL}/logout`, 
            {
                headers: {
                    ...REQUEST_HEADERS.headers,
                    'Authorization': localStorage.getItem('user')
                }
            });

            localStorage.removeItem('user');
            dispatch(logoutSuccess());
        }
        catch (error) {
            dispatch(logoutError(error));
        }
    };
};