import rivitaAPI from './rivitaAPI'

export const getWagons = () => async (dispatch,getState) =>{
    try{
        dispatch({
            type: 'WAGONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.get('/api/Wagons', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'WAGONS_FETCH_SUCCESS',
            payload: response.data
        });
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

export const getWagonsByTransportation = (transportationId,callback) => async (dispatch,getState) =>{
    try{
        dispatch({
            type: 'TRANSPORTATION_WAGONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.get('/api/Wagons/transportation/'+transportationId, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATION_WAGONS_FETCH_SUCCESS',
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

export const insertWagon = (postObj, callback) => async(dispatch,getState)=>{
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'WAGONS_CREATE_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await rivitaAPI.post('/api/Wagons',postObj, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'WAGONS_CREATE_SUCCESS',
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


export const updateWagon = (postObj,reducerObj,callback) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'WAGONS_UPDATE_REQUEST'
        });
        // get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await rivitaAPI.put(`/api/Wagons/${reducerObj.id}`,postObj, {headers: {Authorization: `Bearer ${token}`}});
        dispatch({
            type: 'WAGONS_UPDATE_SUCCESS',
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