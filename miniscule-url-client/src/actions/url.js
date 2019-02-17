import axios from 'axios';

const API_URL = 'http://localhost:3000/';

const getRequestHeaders = () => ({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('user')
    }
});

export const POST_URL_REQUEST = 'POST_URL_REQUEST';
export const POST_URL_SUCCESS = 'POST_URL_SUCCESS';
export const POST_URL_ERROR = 'POST_URL_ERROR';

export const GET_URLS_REQUEST = 'GET_URLS_REQUEST';
export const GET_URLS_SUCCESS = 'GET_URLS_SUCCESS';
export const GET_URLS_ERROR = 'GET_URLS_ERROR';

export const SET_URL = 'SET_URL';

const postUrlRequest = () => ({
    type: POST_URL_REQUEST
});

const postUrlSuccess = () => ({
    type: POST_URL_SUCCESS
});

const postUrlError = (error) => ({
    type: POST_URL_ERROR,
    payload: error
});

const getUrlsRequest = () => ({
    type: GET_URLS_REQUEST
});

const getUrlsSuccess = (urls) => ({
    type: GET_URLS_SUCCESS,
    payload: urls
});

const getUrlsError = (error) => ({
    type: GET_URLS_ERROR,
    payload: error
});

export const setUrl = (url) => ({
    type: SET_URL,
    payload: url
});

export const getUrls = () => {
    return async (dispatch) => {
        try {
            dispatch(getUrlsRequest());

            const response = await axios.get(`${API_URL}/api/v1/url`, getRequestHeaders());

            dispatch(getUrlsSuccess(response.data.urls));
        }
        catch (error) {
            dispatch(getUrlsError(error));
        }
    };
};

export const postUrl = (url) => {
    return async (dispatch) => {
        try {
            dispatch(postUrlRequest());

            const response = await axios.post(`${API_URL}/api/v1/url`, {
                url: {
                 original_url: url 
                }
            }, getRequestHeaders());

            dispatch(postUrlSuccess());
        }
        catch (error) {
            dispatch(postUrlError(error));
        }
    };
};

