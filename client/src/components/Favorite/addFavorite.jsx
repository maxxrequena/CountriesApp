import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from '../../actions/actions.js'


function AddFavorites(){

    const dispatch = useDispatch()

    const[favorites, setFavorites] = useState({
        idCountry:[]
    })

    function handleSubmit(e){
        e.preventDefault();
        dispatch(addFavorite(favorites))
        setFavorites({
            idCountry:[]
        })
    }

    return(
        <div>

        </div>
    )
}

export default AddFavorites;