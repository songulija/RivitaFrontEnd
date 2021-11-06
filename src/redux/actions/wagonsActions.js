import axios from 'axios'

export const getWagons = () => async (dispatch,getState) =>{
    try{
        dispatch({
            type: 'WAGONS_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await axios.get('/api/Wagons', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'WAGONS_FETCH_SUCCESS',
            payload: response.data
        });
        console.log('Wagons action working:'+JSON.stringify(response.data))
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
        const response = await axios.get('/api/Wagons/transportation/'+transportationId, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'TRANSPORTATION_WAGONS_FETCH_SUCCESS',
            payload: response.data
        });
        console.log('Action wagons:'+JSON.stringify(response.data))
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

export const addWagons = (postObj, callback) => async(dispatch,getState)=>{

}

export const updateWagons = (postObj, callback) => async(dispatch,getState)=>{

}