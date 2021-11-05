export const transportationsReducer = (state = { transportations: [] }, action) => {
    switch (action.type) {
        case 'TRANSPORTATIONS_FETCH_REQUEST':
            return { 'loading': true }
        case 'TRANSPORTATIONS_FETCH_SUCCESS':
            return { ...state,'loading': false, 'transportations': action.payload }
        case 'ERROR':
            return {'loading': false, 'error': action.payload }
        default:
            return state
    }
}