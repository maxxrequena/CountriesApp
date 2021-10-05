import { 
    GET_ALL_COUNTRIES, 
    GET_FILTER_COUNTRY, 
    FILTER_CONTINENT,
    SET_ORDER,
    SET_AREA,
    GET_DETAIL,
    GET_ALL_ACTIVITIES,
    CREATE_ACTIVITY
} from '../actions/actions.js'

const initialState = {
    allCountries: [],
    allCountry: [],
    detailCountry: {},
    allActivities: [],
    order:"",
    area:""
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
        case GET_FILTER_COUNTRY: {
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
        case SET_ORDER :
            return {
                ...state,
                order: action.payload
            }
        case SET_AREA:
            return{
                ...state,
                area : action.payload
            }    
        case GET_DETAIL:
            return{
                ...state,
                detailCountry: action.payload
            }
        case GET_ALL_ACTIVITIES:
            return{
                ...state,
                allActivities: action.payload
            }
        case CREATE_ACTIVITY:
            return{
                ...state,
            }               
        default : return state
    }
}


export default rootReducer;