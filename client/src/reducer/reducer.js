import { GET_ALL_COUNTRIES, GET_NAME_COUNTRY, FILTER_CONTINENT} from '../actions/actions.js'

const initialState = {
    allCountries: [],
    allCountry: [],
    detailCountry: {},
    allActivities: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
    
        case GET_ALL_COUNTRIES: {
            return{
                ...state,
                allCountries: action.payload,
                allCountry: action.payload
            }
        }
        case GET_NAME_COUNTRY: {
            return {
                ...state,
                allCountry: action.payload
            }
        }
        case FILTER_CONTINENT:
            const allCountries = state.allCountries 
            let filterContinent= [];
            if(action.payload === "All"){
                filterContinent= allCountries
            }else{
                filterContinent = allCountries.filter(c => c.continent === action.payload)
            }
            return{
                ...state,
                allCountry: filterContinent
            }
        default : return state
    }
}


export default rootReducer;