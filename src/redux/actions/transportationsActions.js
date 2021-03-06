import rivitaAPI from './rivitaAPI';
export const getTransportations = (callback) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'TRANSPORTATIONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.get('/api/Transportations', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_FETCH_SUCCESS',
            payload: response.data
        });
        callback();
    } catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}

export const getTransportationsByParams = (query, callback) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'TRANSPORTATIONS_BY_PARAMS_FETCH_REQUEST'
        });
        // get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.get(`/api/Transportations/search?${query}`, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_BY_PARAMS_FETCH_SUCCESS',
            payload: response.data
        });
        callback();
    } catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}


export const createTransportation = (postObject, callback) => async (dispatch, getState) => {
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'TRANSPORTATIONS_CREATE_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.post('/api/Transportations', postObject, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_CREATE_SUCCESS',
            payload: response.data
        });
        callback();
    } catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}

export const updateTransportation = (postObj, reducerObj, callback) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'TRANSPORTATIONS_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await rivitaAPI.put(`/api/Transportations/${reducerObj.id}`, postObj, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATIONS_UPDATE_SUCCESS',
            payload: reducerObj
        });
        callback();
    } catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}

export const getTransportationDetails = (id, callback) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'TRANSPORTATION_DETAILS_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.get(`/api/Transportations/${id}`, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATION_DETAILS_SUCCESS',
            payload: response.data
        });
        callback();
    } catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}


export const deleteTransportation = (id, callback) => async(dispatch,getState)=> {
    try{
        dispatch({
            type: 'TRANSPORTATIONS_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await rivitaAPI.delete(`/api/Transportations/${id}`, {headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'TRANSPORTATIONS_DELETE_SUCCESS',
            payload: id
        })
        callback();
    }catch (error) {
        if (error.response === undefined) {
            dispatch({
                type: "ERROR",
                payload: { message: "Oopsie... System error. Try again, later" },
            });
        } else {
            dispatch({
                type: "ERROR", payload: error.response.data
            });
        }
    }
}