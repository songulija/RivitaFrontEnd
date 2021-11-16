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

// export const updateWagons = (postObj, callback) => async(dispatch,getState)=>{
//     try{
//         dispatch({
//             type: 'WAGONS_UPDATE_REQUEST'
//         });

//         const token = getState().usersReducer.currentUser;
//         const response = await axios.post('/api/wagons/update',postObj, { headers: { Authorization: `Bearer ${token}` } })
//         dispatch({
//             type: 'WAGONS_UPDATE_SUCCESS',
//             payload: postObj
//         });
//         callback();
//     }catch(error){
//         if (error.response === undefined) {
//             dispatch({
//                 type: "ERROR",
//                 payload: { message: "Oopsie... System error. Try again, later" },
//             });
//         }else{
//             dispatch({
//                 type: "ERROR", payload: error.response.data
//             });
//         }
//     }
// }

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

export const insertWagon = (postObj, callback) => async(dispatch,getState)=>{
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'WAGONS_CREATE_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await axios.post('/api/Wagons',postObj, { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'WAGONS_CREATE_SUCCESS',
            payload: response.data
        });
        console.log('Added wagon in action:'+JSON.stringify(response.data))
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
        const response = await axios.put(`/api/Wagons/${reducerObj.id}`,postObj, {headers: {Authorization: `Bearer ${token}`}});
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