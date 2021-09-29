import React from "react";
import { Link } from 'react-router-dom';
import style from './landing.module.css'

function Landing(){
    return(
        <div className={style.img}>
            <div className={style.container}>
                <Link to={'/home'}>
                    <button className={style.btn}> home </button>
                </Link>
            </div>
        </div>
    )

}

export default Landing;
