import axios from 'axios';
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES"
export const GET_FILTER_COUNTRY = "GET_FILTER_COUNTRY"
export const FILTER_CONTINENT = "FILTER_CONTINENT"
export const SET_ORDER = "SET_ORDER"
export const SET_AREA = "SET_AREA"
export const GET_DETAIL = "GET_DETAIL"
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"
export const DELETE_FILTER = "DELETE_FILTER"

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
        try {
            let json = await axios(`http://localhost:3001/countries?name=${name?name:""}&area=${area?area:""}&order=${order?order:""}`)
        return dispatch({
            type: 'GET_FILTER_COUNTRY',
            payload: json.data
        })
        } catch (error) {
            console.log("error getFilterCountry", error)
        }
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

export function getDetail (id) {
    return async function(dispatch){
        try {
            var json = await axios(`http://localhost:3001/countries/${id}`)
            return dispatch ({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log("error getDetail", error)
        }
    }
}

export function getAllActivities (){
    return async function(dispatch){
        try {
            let json = axios.get('http://localhost:3001/activity')
            return dispatch({
            type: 'GET_ALL_ACTIVITIES',
            payload: json.data
            })
        } catch (error) {
            console.log("error GetAllActivities", error)
        }
    }
}

export function createActivity(activity){
    return async function(){
        try {
            console.log("post pre await")
            let json = await axios.post('http://localhost:3001/activity',activity)
            return json
        } catch (error) {
            console.log("createActivity Error")
        }
    }
}

