import axios from 'axios'
export const getTransportations = (callback) => async (dispatch,getState) => {
    try{
        dispatch({
            type: 'TRANSPORTATIONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await axios.get('https://rivitabackend20211127164230.azurewebsites.net/api/Transportations', { headers: { Authorization: `Bearer ${token}` } });
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

export const getTransportationsByParams = (query,callback) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'TRANSPORTATIONS_BY_PARAMS_FETCH_REQUEST'
        });
        // get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await axios.get(`https://rivitabackend20211127164230.azurewebsites.net/api/Transportations/search?${query}`,{headers: {Authorization: `Bearer ${token}`}});
        dispatch({
            type: 'TRANSPORTATIONS_BY_PARAMS_FETCH_SUCCESS',
            payload: response.data
        });
        callback();
    }catch(error){
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
        const response = await axios.post('https://rivitabackend20211127164230.azurewebsites.net/api/Transportations',postObject, { headers: { Authorization: `Bearer ${token}` } });
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

export const updateTransportation = (postObj,reducerObj,callback) => async(dispatch,getState) =>{
    try{
        dispatch({
            type: 'TRANSPORTATIONS_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await axios.put(`https://rivitabackend20211127164230.azurewebsites.net/api/Transportations/${reducerObj.id}`,postObj, {headers: {Authorization: `Bearer ${token}`}});
        dispatch({
            type: 'TRANSPORTATIONS_UPDATE_SUCCESS',
            payload: reducerObj
        });
        callback();
    }catch(error){
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