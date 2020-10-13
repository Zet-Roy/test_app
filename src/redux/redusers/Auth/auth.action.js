import { USER_AUTH, USER_AUTH_SUCCESS, USER_AUTH_ERROR, USER_SET_AUTH, USER_AUTH_CLEAR_ERROR } from './auth.type';

export const authRequest = (username, password) => async (dispatch) => {
    dispatch({ type: USER_AUTH })

    if (username === "Admin" && password === "12345") {

        localStorage.setItem('auth', "true")

        dispatch({
            type: USER_AUTH_SUCCESS,
            payload: true
        });
    } else {
        dispatch({
            type: USER_AUTH_ERROR,
            payload: "Имя пользователя или пароль введены не верно"
        });
    }
};

export const setAuth = (value) => async (dispatch) => {
    dispatch({
        type: USER_SET_AUTH,
        payload: value
    });
}

export const clearAuth = () => async (dispatch) => {
    dispatch({
        type: USER_AUTH_CLEAR_ERROR
    });
}