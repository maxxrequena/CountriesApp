import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {filterContinent} from '../../actions/actions'
import { getCountries } from '../../actions/actions.js'
import style from '../Filters/filters.module.css'


function SetContinent(){

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])
    
    function handleFilterContinent(e){
        dispatch(filterContinent(e.target.value))
    }

    return(
        <div className={style.select} >
            <select onChange = {(e)=>handleFilterContinent(e)} >
                <optgroup label="Select Continent">
                    <option value ='All'>All Countries</option>
                    <option value ='Americas'>America</option>
                    <option value ='Europe'>Europe</option>
                    <option value ='Africa'>Africa</option>
                    <option value ='Asia'>Asia</option>
                    <option value ='Oceania'>Oceania</option>
                </optgroup>
            </select>
        </div>
         
    )



}

export default SetContinent;
