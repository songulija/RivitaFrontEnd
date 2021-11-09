import axios from "axios";
import jwt_decode from "jwt-decode";

export const login = (email, password,callback) => async (dispatch) => {
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
        localStorage.setItem('currentUser', response.data.token);
        callback();

    } catch (error) {//if something fails then dispatch action with type/name PRODUCT_DETAILS_FAIL and pass error data as payload
        console.log(error)
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getUserData = (num,callback) => async(dispatch, getState)=>{
    try{
        // let numb = num;
        dispatch({
            type: 'USER_DATA_REQUEST'
        });

        const { usersReducer: { currentUser } } = getState();
        // const { usersReducer: { currentUser } } = getState();//get user info
        
        const token = currentUser;
        let userRole = '';
        const userData = jwt_decode(token); // decode your token here
        // if userRole is admin save userRole in localStorage to access at all times
        if (userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Administrator') {
            userRole = 'Administrator';
        }else{
            userRole = 'User';
        }
        dispatch({
            type: 'USER_DATA_SUCCESS',
            payload: userRole
        });
        if(userRole === 'Administrator'){
            localStorage.setItem('userRole',userRole)
        }
        callback()
    }catch(error){
        dispatch({
            type: 'USER_DATA_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// export const removeUserData = () => (dispatch)=>{
//     dispatch({type: 'USER_DATA_REMOVE'})

// }

export const logout = () => (dispatch) => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
    dispatch({ type: 'USER_LOGOUT' });
    dispatch({type: 'USER_DATA_REMOVE'});
}


export const register = (postObject,callback) => async (dispatch,getState) => {
    try {

        dispatch({
            type: 'USER_REGISTER_REQUEST'
        })

        const token = getState().usersReducer.currentUser;
        console.log('Action postObj:'+JSON.stringify(postObject))
        const response = await axios.post('/api/Accounts/register',postObject,{ headers: { Authorization: `Bearer ${token}` } })

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

export const getUsers = (num,callback) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: 'FETCH_USERS_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await axios.get('/api/Accounts',{ headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'FETCH_USERS_SUCCESS',
            payload: response.data,
        });
        console.log('Action got data:'+JSON.stringify(response.data))
        callback();
    } catch (error) {
        dispatch({
            type: 'FETCH_USERS_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}