import { USER_AUTH, USER_AUTH_SUCCESS, USER_AUTH_ERROR, USER_SET_AUTH, USER_AUTH_CLEAR_ERROR } from './auth.type';

const INITIAL_STATE = {
    isAuthenticated: false,
    isLoading: false,
    errorMessage: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_AUTH:
            return {
                ...state,
                isLoading: true
            }
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: action.payload,
                errorMessage: null
            }
        case USER_AUTH_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        case USER_SET_AUTH:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case USER_AUTH_CLEAR_ERROR:
            return {
                ...state,
                errorMessage: null
            }
        default: return state;
    }
};

export default reducer;