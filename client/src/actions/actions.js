import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY"
export const FILTER_CONTINENT = "FILTER_CONTINENT"

export function getCountries(){
    return async function(dispatch){
        var json = await axios('http://localhost:3001/countries');
        //  console.log("json de action",json)
        return dispatch({
            type: 'GET_ALL_COUNTRIES',
            payload: json.data
        })
    }
}

export function getNameCountry(name){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: json.data
            })
    }
}

export function filterContinent(payload){
    return{
        type: 'FILTER_CONTINENT',
        payload
    }
}