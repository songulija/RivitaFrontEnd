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
        case 'WAGONS_UPDATE_REQUEST':
            return {...state, 'loading':true}
        case 'WAGONS_UPDATE_SUCCESS':
            // in updatedItems array will not be all items. only those that i sent to update
            const updatedItems = action.payload;
            const wagonsArray = state.wagons;
            // map through updatedItems(wagons) array through all items. then map through wagons array and check if
            // there are items with same id. if so then change 
            updatedItems.map((obj,index)=>{
                wagonsArray.map((element,index1)=>{
                    if(element.id === obj.id){
                        const updatedObj = obj;
                        element = updatedObj;
                    }
                })
            });
            return {...state, 'loading':false, 'wagons':wagonsArray}
        case 'ERROR':
            return { ...state,'loading': false, 'error': action.payload }
        default:
            return state;
    }

}