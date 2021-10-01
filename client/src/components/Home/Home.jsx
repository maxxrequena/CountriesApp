import React, { useEffect, useState } from 'react';
import style from '../Home/home.module.css'
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card.jsx'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCountries } from '../../actions/actions.js'
import Pagination from '../Pagination/Pagination.jsx'
import gif from '../Home/globeGid.gif'



function Home () {

  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountries)
   
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 9;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paged = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getCountries());
  },[dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries())
}


  return(
      <div className={style.body}>
        <NavBar/>
        <Pagination 
          countriesPerPage ={countriesPerPage}
          allCountries={allCountries.length}
          paged={paged}
        />
        <div>
          {
            currentCountries ?  
            currentCountries.map( (c) => {
                return (
                  <div key={c.id}>
                    <Card flag={c.flag} name={c.name} continent={c.continent} id={c.id}/>
                  </div>
                )
            }) :(<img src={gif} alt=" "></img>) 
          }
        </div>
        <Card/>
      </div>       
  )
    
}

export default Home;