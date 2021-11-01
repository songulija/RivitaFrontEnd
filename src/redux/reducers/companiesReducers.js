//companies reducer inside will have companies state

//(state = { currentUser: null, user: null }, action)
export const companiesReducer = (state = { companies: []}, action) => {
    switch(action.type){
        case 'COMPANIES_FETCH_REQUEST':
            return {loading: true}
        case 'COMPANIES_FETCH_SUCCESS':
            return {...state, 'loading':false, companies:action.payload}
        case 'ERROR':
            return {'loading':false, 'error':action.payload}
        default:
            return state
    }
}