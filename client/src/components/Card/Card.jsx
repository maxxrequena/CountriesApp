import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addFavorites } from '../../actions/actions'
import style from '../Card/card.module.css'



function Card ({flag, name, continent, id}){

    return (
        <div className={style.container}>
            <div className={style.card}>
                <Link to={'/countries/' + id}>
                    <img className={style.img} src={flag} alt=" " width="350px" height="200px"></img>
                </Link>
                    <h2 className={style.h2}>{name}</h2>
                    <h3 className={style.h3}>{continent}</h3>
            </div>
        </div>
    )  
}

export default Card;