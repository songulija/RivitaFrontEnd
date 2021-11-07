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
        case 'WAGONS_CREATE_REQUEST':
            return {...state,'loading':true}
        case 'WAGONS_CREATE_SUCCESS':
            const newWagons = [...state.wagons, {...action.payload}]
            return {...state,'loading':false, 'wagons':newWagons}
        case 'ERROR':
            return { ...state,'loading': false, 'error': action.payload }
        default:
            return state;
    }

}