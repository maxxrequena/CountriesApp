/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Link, useParams} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, getCountries } from '../../actions/actions.js'
import style from '../DetailCountry/details.module.css'

function DetailCountry (){

    const {id} = useParams()
    
    const dispatch = useDispatch(); 
    const detail = useSelector(state => state.detailCountry)
    // console.log("detail ", detail)
    useEffect(() => {
        dispatch(getCountries())
        dispatch(getDetail(id))
    },[dispatch])

    return (

        <div className={style.container}>
            <div className={style.card}>
                <img src={detail.flag} alt=" "/>
                <h1>{detail.name}</h1>
                <h2 >Continent: {detail.continent}</h2>
                <h2 >Subregion: {detail.subregion}</h2>
                <h2 >Capital: {detail.capital}</h2>
                <h2 >Area: {detail.area} km2</h2>
                <Link to='/home'><button className={style.button} > Return Home</button></Link>

            </div>
            <div className={style.card}>
                <h1>Activities:</h1>
                {detail?.activities?.length ?
                    detail?.activities.map(a => {
                        return (<div  className={style.boxAct} key={a.id} >
                            <p>Name: {a.name}</p>
                            <p>Difficulty: {a.difficulty} (easy - hard)</p>
                            <p>Duration: {a.duration} Hs.</p>
                            <p>Season: {a.season}</p>
                        </div>)
                    }) :
                    <p> The country does not contain activity</p>
                }    
            </div>
        </div>
    )
}

export default DetailCountry;