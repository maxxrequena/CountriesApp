/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getCountries, createActivity } from '../../actions/actions.js'
import style from '../Activity/createActivity.module.css'

function validate (activity) {
    let errors = {};
    console.log("validate act", activity)
    if (!activity.name) {
        errors.name = "Requiere Name";
    }
    if (!activity.difficulty ) {
       errors.difficulty = "Requiere Difficulty"
    } 
    if (activity.difficulty > 5 ) {
        errors.difficulty = "Requiere Difficulty"
    }
    if(!activity.duration){
        errors.duration = 'Requiere Duration';
    } 
    if (!activity.season) {
        errors.season = "Requiere Season"
    } 
    if (!activity.idCountry.length) {
        errors.idCountry = "Requiere Country"
    }
    return errors
}

function CreateActivity(){

    const history = useHistory();
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountry)

    const[errors, setErrors] = useState({})

    const[activity, setActivity] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        idCountry:[]
    })

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    function handleSelect(e){
        setActivity({
            ...activity,
            idCountry: [...activity.idCountry, e.target.value]
        })
        setErrors(validate({
            ...activity,
            [e.target.name]: e.target.value
        }))
    }
  
    function handleChange(e) {
   
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        }); 
        
        setErrors(validate({ 
            ...activity,
            [e.target.name]: e.target.value
        }))
    }
    
    function handleDelete(el){
        setActivity({
            ...activity,
            idCountry: activity.idCountry.filter(occ => occ !== el)
        })        
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createActivity(activity))
        alert("Activity Create")
        setActivity({
            name:"",
            dificulty:"",
            duration:"",
            season:"",
            idCountry: []
        })
        history.push('/home')
    }
    
    return (
        <div className={style.container}>
            <div className={style.card}>
                <section>
                    <h1>Crea  la actividad turistica</h1>
                        <Link to="/home" ><button >VOLVER A HOME</button></Link>
                        <form onSubmit={e => { handleSubmit(e) }}>
                        {/* <label >Selecciona el Pais</label> */}
                    <div className={style.select} >
                        <select  onChange= {(e) => handleSelect(e)}>
                                <option>Select country...</option>
                                 {countries.map((c) => (
                                    <option  key={c.id} value={c.id}>{c.name}</option>
                                ))}
                        </select>
                       
                    </div>
                    <div className={style.select} >
                        <select
                            name='difficulty'
                            onChange={(e) => handleChange(e)}>
                                <option value=''>Difficulty...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                        </select>
                        
                    </div>
                    <div className={style.select} >
                        {/* <label >Duracion (en horas) :</label>
                        <input type='number' value={activity.duration} name='duration'
                            onChange={e => handleChange(e)}>
                        </input> */}
                         <select
                            name='duration'
                            value={activity.duration}
                            onChange={(e) => handleChange(e)}>
                                <option value=''>Duration...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                        </select>
                       
                    </div>
                    <div className={style.select} >
                        {/* <label >Temporada del año:</label> */}
                        <select name="season" value={activity.season} onChange={e => handleChange(e)}>
                            <option value="temporada">Temporada</option>
                            <option value="Summer">Verano</option>
                            <option value="Winter">Invierno</option>
                            <option value="Spring">Primavera</option>
                            <option value="Fall">Otoño</option>
                        </select>
                        {/* <label>
                                    <input
                                        type='checkbox'
                                        name='Summer'
                                        value='Summer'
                                        onChange={(e) => handleChange(e)}
                                    />Summer</label>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='Fall'
                                        value='Fall'
                                        onChange={(e) => handleChange(e)}
                                    />Fall</label>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='Winter'
                                        value='Winter'
                                        onChange={(e) => handleChange(e)}
                                    />Winter</label>
                                <label>
                                    <input
                                        type='checkbox'
                                        name='Spring'
                                        value='Spring'
                                        onChange={(e) => handleChange(e)}
                                    />Spring</label>             */}
                    </div>
                    <div>
                        {/* <label >Nombre:</label> */}
                        <input type='text' value={activity.name} name='name' placeholder= "Insert name activity"
                            onChange={(e) => {handleChange(e) }}>
                        </input>
                        
                    </div>
                    <button type='submit'>Crear Actividad</button>
                </form>
                    {activity.idCountry.map(el =>
                        <div> 
                            <p>{el}</p>
                            <button onClick={()=> handleDelete(el)}>X</button>
                        </div>)
                    }
                    {errors.idCountry && (<p>{errors.idCountry}</p>)}
                    {errors.name && (<p>{errors.name}</p>)}
                    {errors.difficulty && (<p>{errors.difficulty}</p>)}
                    {errors.duration && (<p >{errors.duration}</p>)}
                    {errors.season && (<p>{errors.season}</p>)}
            </section>
            </div>
        </div>
    )
}

export default CreateActivity;