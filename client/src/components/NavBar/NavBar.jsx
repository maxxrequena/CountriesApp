import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getCountries } from '../../actions/actions.js'
import { Link } from 'react-router-dom';
import style from '../NavBar/navbar.module.css';
import Search from '../Search/Search.jsx'
import SetContinent from '../Filters/setContinent.jsx'
import SetOrderCountry from '../Filters/setOrderCountry'
import SetArea from '../Filters/setArea.jsx'


function NavBar () {


    const dispatch = useDispatch();

    function deleteFilter(e){
        dispatch( { type: 'DELETE_FILTER'} )
        dispatch(getCountries(e))
    }
    
    return (
        <div className={style.container}>
            <div className={style.nav}>
                    <Link to="/home"> Home </Link>
                    <Link to='/activity'> Create Activity </Link>
                    <button href=" " onClick={(e)=> deleteFilter(e)}> Reset Filter</button>
                    <SetContinent/>
                    <SetOrderCountry/>
                    <SetArea/>  
                    <Search/>
            </div>
        </div>
    )
}

export default NavBar;
