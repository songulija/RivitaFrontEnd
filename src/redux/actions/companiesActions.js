import axios from "axios";

export const getCompanies = (callback) => async (dispatch) => {
    try {
        dispatch({//first dispatch action with type/name USER_LOGIN_REQUEST. reducer will caught it. and set loading to true
            type: 'COMPANIES_FETCH_REQUEST'
        });

        const token = getState().usersReducer.currentUser;
        const response = await axios.get('api/Companies', { headers: { Authorization: `Bearer ${token}` } });
        dispatch({
            type: 'COMPANIES_FETCH_SUCCESS',
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