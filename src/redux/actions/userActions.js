import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'
import rivitaAPI from "./rivitaAPI";

export const login = (username, password, callback) => async (dispatch) => {
    try {
        dispatch({
            type: 'USER_LOGIN_REQUEST'
        });

        const postObject = {
            "username": username,
            "password": password
        }
        const response = await rivitaAPI.post('/api/Accounts/login', postObject);
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: response.data
        });
        var inFifteenMinutes = new Date(new Date().getTime() + 50 * 60 * 1000);
        Cookies.set('currentUser', response.data.token, {
            expires: inFifteenMinutes
        });
        const userData = jwt_decode(response.data.token);
       
        if (userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'ADMINISTRATOR') {
            Cookies.set('role', 'ADMINISTRATOR', {
                expires: inFifteenMinutes
            });
        }

        callback();

    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}


export const getUserData = () => (dispatch, getState) => {
    try {
        dispatch({
            type: 'USER_DATA_SUCCESS',
            payload: Cookies.get('role')
        });
        console.log('Have role in cookie')

    } catch (error) {
        dispatch({
            type: 'USER_DATA_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }


}

export const logout = () => (dispatch) => {
    Cookies.remove('currentUser')
    Cookies.remove('role')
    dispatch({ type: 'USER_LOGOUT' });
    dispatch({ type: 'USER_DATA_REMOVE' });
}


export const register = (postObject, callback) => async (dispatch, getState) => {
    try {

        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })

        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.post('/api/Accounts/register', postObject, { headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: response.data,
        });
        callback();
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}