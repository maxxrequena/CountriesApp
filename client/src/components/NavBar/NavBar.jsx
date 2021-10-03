import React from 'react';
import style from '../NavBar/navbar.module.css';
import Search from '../Search/Search.jsx'
import GetContinent from '../Filters/getContinent.jsx'
import SetOrderCountry from '../Filters/setOrderCountry'
import SetArea from '../Filters/setArea.jsx'


function NavBar () {
    return (
        <div className={style.nav}>
            <ul className={style.nav_links}>
                
                <a href="/home"> Home </a>
                <a href="/activity"> Create Activity </a>
                <a href="/home"> Reset Filter</a>
                <GetContinent/>
                <SetOrderCountry/>
                <SetArea/>
            </ul>
                <Search/>
            {/* <select className={style.nav_links}>   
                <a href=" "> Filter Order </a>  
                <option value="all">Todos</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select> */}
            {/* <GetContinent/> */}
            <ul className={style.nav_links}>
            
            </ul>
        </div>
    )
}

export default NavBar;
