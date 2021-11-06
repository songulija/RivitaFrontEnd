import axios from 'axios'
export const getTransportations = (num,callback) => async (dispatch,getState) => {
    try{
        let numb = num;
        dispatch({
            type: 'TRANSPORTATIONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await axios.get('api/Transportations', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_FETCH_SUCCESS',
            payload: response.data
        });
        callback();
    } catch(error){
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        }else{
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}


export const createTransportation = (postObject,callback) => async (dispatch,getState) => {
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'TRANSPORTATIONS_CREATE_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await axios.post('api/Transportations',postObject, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_CREATE_SUCCESS',
            payload: response.data
        });
        console.log('Created transportation:'+JSON.stringify(response.data))
        callback();
    } catch(error){
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        }else{
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}