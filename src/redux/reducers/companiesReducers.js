//companies reducer inside will have companies state
export const usersReducer = (state = { companies: [], loading: false, error: null }, action) => {
    switch(action.type){
        case 'COMPANIES_FETCH_REQUEST':
            return {loading: true}
        case 'COMPANIES_FETCH_SUCCESS':
            return {...state, 'loading':false, 'companies':action.payload}
        case 'ERROR':
            return {'loading':false, 'error':action.payload}
    }
}