//companies reducer inside will have companies state

//(state = { currentUser: null, user: null }, action)
export const companiesReducer = (state = { companies: []}, action) => {
    switch(action.type){
        case 'COMPANIES_FETCH_REQUEST':
            return {loading: true}
        case 'COMPANIES_FETCH_SUCCESS':
            return {...state, 'loading':false, companies:action.payload}
        case 'COMPANIES_CREATE_REQUEST':
            return {...state,loading: true}
        case 'COMPANIES_CREATE_SUCCESS':
            // add new item(action payload) to array of companies
            const newCompanies = [ ...state.companies, { ...action.payload } ];
            return {...state,'loading':false, 'companies':newCompanies}
        case 'COMPANIES_UPDATE_REQUEST':
            return {...state, loading: true}
        case 'COMPANIES_UPDATE_SUCCESS':
            const companiesClone = JSON.parse(JSON.stringify(state.companies));
            companies.map((element,index)=>{
                if(element.id === action.payload.id){
                    element.name = action.payload.name
                }
            });
            return {...state,loading:false, companies: companiesClone}
        case 'ERROR':
            return {loading:false, 'error':action.payload}
        default:
            return state
    }
}