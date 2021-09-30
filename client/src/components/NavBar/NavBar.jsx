import React from 'react';
import style from '../NavBar/navbar.module.css'


function NavBar () {
    return (
        <div className={style.nav}>
            <ul className={style.nav_links}>
                <a href="/home"> Home </a>
                <a href="/activity"> Create Activity </a>
                <a href=" "> Filters </a>
            </ul>
            <ul className={style.nav_links}>
                
            </ul>
        </div>
    )
}

export default NavBar;
