export const transportationsReducer = (state = { transportations: [] }, action) => {
    switch (action.type) {
        case 'TRANSPORTATIONS_FETCH_REQUEST':
            return { 'loading': true }
        case 'TRANSPORTATIONS_FETCH_SUCCESS':
            return { ...state,'loading': false, 'transportations': action.payload }
        case 'TRANSPORTATIONS_CREATE_REQUEST':
            return {...state, 'loading': true}
        case 'TRANSPORTATIONS_CREATE_SUCCESS':
            //adding new transportation to transportations state
            const newTransportations = [...state.transportations, {...action.payload }]
            return {...state, 'loading':false, 'transportations':newTransportations }
        case 'ERROR':
            return {'loading': false, 'error': action.payload }
        default:
            return state
    }
}