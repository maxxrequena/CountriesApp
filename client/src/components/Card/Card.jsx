import React from 'react';
import style from '../Card/card.module.css'


function Card ({flag, name, continent}){
    console.log("continent", continent)
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img className={style.img} src={flag} alt=" "></img>
                    <h2 >{name}</h2>
                    <div>{continent}</div>
                {/* <div className={style.title_epic} > + info </div> */}
            </div>
            {/*             
            <div className={style.actions}>
                <button className={style.actions__like}> like &nbsp; <i className={style.fas}></i> </button>
                <button className={style.actions__trade}> trade &nbsp; <i className={style.fas}></i> </button>
                <button className={style.action__cancel}> close &nbsp; <i className={style.fas}></i> </button>
            </div> */}
            
        </div> 
    ) 

}

export default Card;