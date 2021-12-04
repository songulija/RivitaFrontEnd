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
        case 'WAGONS_UPDATE_REQUEST':
            return {...state, 'loading' : true}
        case 'WAGONS_UPDATE_SUCCESS':
            const wagonsClone = JSON.parse(JSON.stringify(state.wagons));
            wagonsClone.map((element,index)=>{
                if(element.id === action.payload.id){
                    element.transportationId = action.payload.transportationId;
                    element.numberOfWagon = action.payload.numberOfWagon;
                    element.typeOfWagon = action.payload.typeOfWagon;
                    element.weight = action.payload.weight;

                }
            })
            return {...state, 'loading':false, 'wagons':wagonsClone}
        case 'ERROR':
            return { ...state,'loading': false, 'error': action.payload }
        default:
            return state;
    }

}