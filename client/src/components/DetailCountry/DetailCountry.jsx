/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Link, useParams} from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from '../../actions/actions.js'
import style from '../DetailCountry/details.module.css'

function DetailCountry (){

    const {id} = useParams()
    
    const dispatch = useDispatch(); 
    const detail = useSelector(state => state.detailCountry)
    // console.log("detail ", detail)
    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch])

    return (

        <div className={style.container}>
            <div className={style.card}>
                <img src={detail.flag} alt=" "/>
                <h1>{detail.name}</h1>
                <h2 >Continent: {detail.continent}</h2>
                <h2 >Subregion: {detail.subregion}</h2>
                <h3 >Capital: {detail.capital}</h3>
                <h3 >Area:{detail.area} km2</h3>
            </div>
            <div className={style.card}>
                <h3 >Activities:</h3>
                {detail?.activities?.length ?
                    detail?.activities.map(a => {
                        return (<div key={a.id} >
                            <p>Name :{a.name}</p>
                            <p>Difficulty: {a.difficulty}</p>
                            <p>Duration: {a.duration} Hs.</p>
                            <p>Season: {a.season}</p>
                        </div>)
                    }) :
                    <p> NO HAY ACTIVIDADES PARA ESTE PAIS</p>
                }
                <button className={style.button} ><Link to='/home'> Return Home</Link></button>
            </div>
        </div>
    )
}

export default DetailCountry;