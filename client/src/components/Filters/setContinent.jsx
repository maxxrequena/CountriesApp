import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {filterContinent} from '../../actions/actions'
import { getCountries } from '../../actions/actions.js'

function SetContinent(){

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCountries());
    },[dispatch])
    
    function handleFilterContinent(e){
        dispatch(filterContinent(e.target.value))
    }

    return(
        <select onChange = {(e)=>handleFilterContinent(e)} >
            <option value = 'All'>All</option>
            <option value = 'Americas'>America</option>
            <option value = 'Europe'>Europe</option>
            <option value = 'Africa'>Africa</option>
            <option value = 'Asia'>Asia</option>
            <option value = 'Oceania'>Oceania</option>
         </select>
    )



}

export default SetContinent;