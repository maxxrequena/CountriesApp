/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getCountries, createActivity } from '../../actions/actions.js'

function validate (info, idCountry) {
    let errors = {};
    if (!info.name) {
        errors.name = "se requiere completar el Nombre";
    }
    if (!info.dificulty) {
       errors.dificulty = "se requiere completar la dificultad"
    } 
    if (info.dificulty > 5 || info.dificulty < 1) {
        errors.dificulty = "se requiere colocar una dificultad del 1-5"
    }
    if (!info.duration) {
         errors.duration = "se requiere completar la duracion"
    } 
    if (info.duration > 24) {
        errors.duration = "agregar duracion menor a 24 hs"
    }
    if (!info.season.length) {
        errors.season = "se requiere seleccionar la temporada de la actividad"
    } 
    if (!info.idCountry.length) {
        errors.idCountry = "se requiere seleccionar pais"
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
        dificulty:"",
        duration:"",
        season:"",
        idCountry:[]
    })

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    
    // LLEVAR EL ID A OTRA FUNCION Y COMPROBARLO AFUERA 
    
    function handleChange(e) {
        if (!e.target.name) {
            setActivity({
                ...activity,
                idCountry: [...activity.idCountry, e.target.value]})
        }
        else {
            setActivity({
                ...activity,
                [e.target.name]: e.target.value
            }); 
        }
        setErrors(validate({ 
            ...activity,
            [e.target.name]: e.target.value
        }, ))
    };
    
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
    
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     const activityComplete = { ...activity, countryId: idCountry } //uno el objeto de activityPost con el estado de country
    //     console.log("paso por el handle", activityComplete)
    //     if (Object.keys(errors).length === 0) {
    //         //posteo la actividad desde el axios 
    //         const res = await axios.post(`http://localhost:3001/activity`, activityComplete);
    //         console.log(res)
    //         alert("Actividad creada!")
    //         setActivity({ //y seteo el estado 
    //             name: "",
    //             dificulty: "",
    //             duration: "",
    //             season: "",
    //         });
    //         setIdCountry([])

    //     } else if (Object.keys(errors).length > 0) {
    //         alert("Debes completar todos los campos requeridos para agregar la Actividad")
    //     }
    // }
    return (
        <section>


        <h1>Crea  la actividad turistica</h1>
        {/* BOTON PARA VOLVER A HOME */}
        <Link to="/countries" >
            <button >VOLVER A HOME</button>
        </Link>

        
        {/* Hago el formulario */}
        <form onSubmit={e => { handleSubmit(e) }}>
            <div>

                <label >Selecciona el Pais</label>
                <select onChange= {(e) => handleChange(e)}>
                    <option value=' '>Country...</option>
                        {countries.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                </select>
               
            
                {errors.countryId && (<p>{errors.countryId}</p>)}
            </div>

            <div>
                <label >Nombre:</label>
                <input type='text' value={activity.name} name='name'
                    onChange={(e) => {handleChange(e) }}>
                    {/* Debajo de cada input prgeunto si hay algo en error.nombredelinput y si hay algo lo renderizo .TMB ES NECESARIO HACER LA VALIDACION EN EL BACK*/}
                </input>
                {errors.name && (<p>{errors.name}</p>)}
            </div>

            <div >
                <label >Dificultad:</label>
                <input type='number' value={activity.dificulty} name='dificulty'
                    onChange={e => handleChange(e)}>
                </input>
                {/* Debajo de cada input prgeunto si hay algo en error.nombredelinput y si hay algo lo renderizo .TMB ES NECESARIO HACER LA VALIDACION EN EL BACK*/}
                {errors.dificulty && (<p>{errors.dificulty}</p>)}
            </div>

            <div>
                <label >Duracion (en horas) :</label>
                <input type='number' value={activity.duration} name='duration'
                    onChange={e => handleChange(e)}>
                </input>
                {/* Debajo de cada input prgeunto si hay algo en error.nombredelinput y si hay algo lo renderizo .TMB ES NECESARIO HACER LA VALIDACION EN EL BACK*/}
                {errors.duration && (<p >{errors.duration}</p>)}
            </div>

            <div >
                <label >Temporada del año:</label>
                <select name="season" value={activity.season} onChange={e => handleChange(e)}>
                    <option value="temporada">Temporada</option>
                    <option value="Summer">Verano</option>
                    <option value="Winter">Invierno</option>
                    <option value="Spring">Primavera</option>
                    <option value="Fall">Otoño</option>
                </select>
                {errors.season && (<p>{errors.season}</p>)}
            </div>



            <button type='submit'>Crear Actividad</button>
        </form>
        {activity.idCountry.map(el =>
            <div key={el.id}> 
                <p>{el}</p>
                <button onClick={()=> handleDelete(el)}>X</button>
            </div>)}
    </section>
    )
}

export default CreateActivity;