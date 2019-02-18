import {
    SET_URL,
    POST_URL_REQUEST,
    POST_URL_SUCCESS,
    POST_URL_ERROR,
    GET_URLS_REQUEST,
    GET_URLS_SUCCESS,
    GET_URLS_ERROR
} from '../actions/url';


const initialState = {
    urls: [],
    url: '',
    error: {},
    isLoading: false
};

const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_URL:
            return {
                ...state,
                url: action.payload
            };
        case POST_URL_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case POST_URL_SUCCESS:
            return {
                ...state,
                url: '',
                isLoading: false
            };
        case POST_URL_ERROR:
            return {
                ...state,
                url: '',
                error: action.payload,
                isLoading: false
            };
        case GET_URLS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case GET_URLS_SUCCESS:
            return {
                ...state,
                urls: action.payload,
                isLoading: false
            };
        case GET_URLS_ERROR:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }
};

export default urlReducer;