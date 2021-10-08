import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {getFilterCountry} from '../../actions/actions.js'

function Search(){

    const dispatch = useDispatch();
    const [name, setName] = useState(" ");
    // const {area, order} = useSelector(state => state.allCountry)

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getFilterCountry({name}))
    }

    return(
        <div> 
            <input type="text"
            placeholder='search country...'
            onChange={(e) => handleChange(e)} />
            <button type='submit' onClick= {(e)=> handleSubmit(e)}>Search</button>
        </div>
    )
}

export default Search;