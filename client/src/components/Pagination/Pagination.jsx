import React from 'react';
import style from '../Pagination/pagination.module.css'

function Pagination({ countriesPerPage, allCountries, paged}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={style.ul}>
                {
                    pageNumbers.map( n => (
                        <li className={style.list} key={n}>
                            <button className={style.btn} onClick={() => paged(n)} >{n}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;