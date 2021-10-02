import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameCountry} from '../../actions/actions.js'
import style from '../Search/search.module.css'

function Search(){

    const dispatch = useDispatch();
    const [name, setName] = useState(" ");

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameCountry(name))
    }

    return(
        <div> 
            <input type="text"
            placeholder='search country...'
            onChange={(e) => handleChange(e)} />
            <button  className={style.search} type='submit' onClick= {(e)=> handleSubmit(e)}>Search</button>
        </div>
    )
}

export default Search;