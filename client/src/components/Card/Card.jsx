import React from 'react';
import style from '../Card/card.module.css'



function Card ({flag, name, continent}){
    return (
        <div className={style.div}>
            <div className={style.card}>
                <img className={style.img} src={flag} alt=" " width="350px" height="200px"></img>
                <h2 className={style.h2}>{name}</h2>
                <h3 className={style.h3}>{continent}</h3>
            </div>
        
        </div>

    ) 

}

export default Card;