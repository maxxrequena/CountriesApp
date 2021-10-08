import React from 'react';
import { Link } from 'react-router-dom';
import style from '../NavBar/navbar.module.css';
import Search from '../Search/Search.jsx'
import SetContinent from '../Filters/setContinent.jsx'
import SetOrderCountry from '../Filters/setOrderCountry'
import SetArea from '../Filters/setArea.jsx'


function NavBar () {

    
    return (
        <div className={style.container}>
            <div className={style.nav}>
                    <Link to="/home"> Home </Link>
                    <Link to='/activity'> Create Activity </Link>
                    {/* <button href=" " onClick={(e)=> deleteFilter(e)}> Reset Filter</button> */}
                    <SetContinent/>
                    <SetOrderCountry/>
                    <SetArea/>  
                    <Search/>
            </div>
        </div>
    )
}

export default NavBar;
