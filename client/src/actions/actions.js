import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"

export function getCountries(){
    return async function(dispatch){
        var json = await axios('http://localhost:3001/countries');
        console.log(json)
        return dispatch({
            type: 'GET_ALL_COUNTRIES',
            payload: json.data
        })
    }
}