import React from 'react';
import { Link } from 'react-router-dom';
import style from '../NavBar/navbar.module.css';
import Search from '../Search/Search.jsx'
import SetContinent from '../Filters/setContinent.jsx'
import SetOrderCountry from '../Filters/setOrderCountry'
import SetArea from '../Filters/setArea.jsx'


function NavBar () {
    return (
        <div className={style.nav}>
            <ul className={style.nav_links}>
                
                <a href="/home"> Home </a>
                <a href=" "> <Link to='/activity'> Create Activity </Link> </a>
                <a href="/home"> Reset Filter</a>
                <SetContinent/>
                <SetOrderCountry/>
                <SetArea/>
            </ul>
                <Search/>
            <ul className={style.nav_links}>
            
            </ul>
        </div>
    )
}

export default NavBar;
