import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_FILTER_COUNTRY = "GET_FILTER_COUNTRY"
export const FILTER_CONTINENT = "FILTER_CONTINENT"
export const SET_ORDER = "SET_ORDER"
export const SET_AREA = "SET_AREA"

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

export function getFilterCountry({name , area, order}){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/countries?name=${name?name:""}&area=${area?area:""}&order=${order?order:""}`)
            return dispatch({
                type: 'GET_FILTER_COUNTRY',
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

export function setOrder (order) {
    return{
        type: 'SET_ORDER',
        payload: order
    }
}

export function setArea (area) {
    return {
        type: 'SET_AREA',
        payload: area
    }
}