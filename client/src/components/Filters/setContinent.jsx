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
                <option value ='All'>All</option>
                <option value ='Americas'>America</option>
                <option value ='Europe'>Europe</option>
                <option value ='Africa'>Africa</option>
                <option value ='Asia'>Asia</option>
                <option value ='Oceania'>Oceania</option>
            </select>
            {/* <div className={style.proyects}>
                <ul>
                    <li value='All' onChange = {(e)=>handleFilterContinent(e)}>All</li>
                    <li><a href=" ">Music App</a></li>
                    <li><a href=" ">React App</a></li>
                    <li><a href=" ">Youtube App</a></li>
                </ul>
            </div>
  */}
        </div>
         
    )



}

export default SetContinent;
