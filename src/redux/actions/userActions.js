import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'

export const login = (email, password, callback) => async (dispatch) => {
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'USER_LOGIN_REQUEST'
        });
        //then we want to dispatch 'USER_LOGIN_SUCCESS' but we need to check data first
        //but when we're sending data we want to send it in headers

        const config = {//but for now we set content type to application/json'
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //we want to make post request and pass object with email and password. and as third argument pass config
        //this post request will return json data. _id,name,email .. TOKEN
        const postObject = {
            "email": email,
            "password": password
        }
        const response = await axios.post('/api/Accounts/login', postObject);
        dispatch({//dispatch action with type/name USER_LOGIN_SUCCESS. and send data as payload
            type: 'USER_LOGIN_SUCCESS',
            payload: response.data
        });

        //then we want to set our user to local storage. set this 'userInfo' and pass data as as string(json)
        // localStorage.setItem('currentUser', response.data.token);
        // set cookie
        var inFifteenMinutes = new Date(new Date().getTime() + 50 * 60 * 1000);
        Cookies.set('currentUser', response.data.token, {
            expires: inFifteenMinutes
        });
        var userRole = '';
        const userData = jwt_decode(response.data.token); // decode your token here
        // if userRole is admin save userRole in localStorage to access at all times
        if (userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Administrator') {
            userRole = 'Administrator';
            Cookies.set('role', 'Administrator', {
                expires: inFifteenMinutes
            });
        }

        callback();

    } catch (error) {//if something fails then dispatch action with type/name PRODUCT_DETAILS_FAIL and pass error data as payload
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}


export const getUserData = () => (dispatch, getState) => {
    try {
        // const role = getState().userInfoReducer.role;
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
        const response = await axios.post('/api/Accounts/register', postObject, { headers: { Authorization: `Bearer ${token}` } })

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