export const wagonsReducer = (state = { wagons: [] }, action) => {
    switch (action.type) {
        case 'WAGONS_FETCH_REQUEST':
            return { ...state,'loading': true }
        case 'WAGONS_FETCH_SUCCESS':
            return { ...state, 'loading': false, 'wagons': action.payload }
        case 'TRANSPORTATION_WAGONS_FETCH_REQUEST':
            return {...state,'loading':true}
        case 'TRANSPORTATION_WAGONS_FETCH_SUCCESS':
            return {...state,'loading':false, 'wagons':action.payload}
        case 'ERROR':
            return { ...state,'loading': false, 'error': action.payload }
        default:
            return state;
    }

}