export const transportationsReducer = (state = { transportations: [] }, action) => {
    switch (action.type) {
        case 'TRANSPORTATIONS_FETCH_REQUEST':
            return { 'loading': true }
        case 'TRANSPORTATIONS_FETCH_SUCCESS':
            return { ...state,'loading': false, 'transportations': action.payload }
        case 'TRANSPORTATIONS_BY_PARAMS_FETCH_REQUEST':
            return {...state,'loading':true}
        case 'TRANSPORTATIONS_BY_PARAMS_FETCH_SUCCESS':
            return {...state,'loading':false, 'transportations':action.payload} 
        case 'TRANSPORTATIONS_CREATE_REQUEST':
            return {...state, 'loading': true}
        case 'TRANSPORTATIONS_CREATE_SUCCESS':
            //adding new transportation to transportations state
            const newTransportations = [...state.transportations, {...action.payload }]
            return {...state, 'loading':false, 'transportations':newTransportations }
        case 'TRANSPORTATIONS_UPDATE_REQUEST':
            return {...state, 'loading':true}
        case 'TRANSPORTATIONS_UPDATE_SUCCESS':
            const transportationsClone = JSON.parse(JSON.stringify(state.transportations));
            transportationsClone.map((element,index)=>{
                if(element.id === action.payload.id){
                    element.transportationNumber = action.payload.transportationNumber;
                    element.weight = action.payload.weight;
                    element.wagonsCount = action.payload.wagonsCount;
                    element.transportationStatus = action.payload.transportationStatus;
                    element.transportationType = action.payload.transportationType;
                    element.transportationSubCode = action.payload.transportationSubCode;
                    element.cargoAcceptanceDate = action.payload.cargoAcceptanceDate;
                    element.movementStartDateInBelarus = action.payload.movementStartDateInBelarus;
                    element.movementEndDateInBelarus = action.payload.movementEndDateInBelarus;
                    element.etsngCargoCode = action.payload.etsngCargoCode;
                    element.etsngCargoTitle = action.payload.etsngCargoTitle;
                    element.gngCargoCode = action.payload.gngCargoCode;
                    element.gngCargoTitle = action.payload.gngCargoTitle;
                    element.departureStationCode = action.payload.departureStationCode;
                    element.departureStationTitle = action.payload.departureStationTitle;
                    element.departureCountryCode = action.payload.departureCountryCode;
                    element.departureCountryTitle = action.payload.departureCountryTitle;
                    element.destinationStationCode = action.payload.destinationStationCode;
                    element.destinationStationTitle = action.payload.destinationStationTitle;
                    element.destinationCountryCode = action.payload.destinationCountryCode;
                    element.destinationCountryTitle = action.payload.destinationCountryTitle;
                    element.stationMovementBeginingBelarusCode = action.payload.stationMovementBeginingBelarusCode;
                    element.stationMovementBeginingBelarusTitle = action.payload.stationMovementBeginingBelarusTitle;
                    element.stationMovementEndBelarusCode = action.payload.stationMovementEndBelarusCode;
                    element.stationMovementEndBelarusTitle = action.payload.stationMovementEndBelarusTitle;
                }
            });
            return {...state, 'loading':false, 'transportations':transportationsClone}
        case 'ERROR':
            return {'loading': false, 'error': action.payload }
        default:
            return state
    }
}