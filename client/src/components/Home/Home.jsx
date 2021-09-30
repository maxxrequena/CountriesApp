import React from 'react';
import style from '../Home/home.module.css'
import NavBar from '../NavBar/NavBar';



function Home () {
    
    return(
        <div className={style.body}>
            <NavBar/>
        </div>
    )
    
}

export default Home;