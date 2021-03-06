/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import style from '../Home/home.module.css'
import Card from '../Card/Card.jsx'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries, getAllActivities} from '../../actions/actions.js'
import Pagination from '../Pagination/Pagination.jsx'
import gif from '../Home/mGIF.gif'
import Search from '../Search/Search.jsx'
import SetContinent from '../Filters/setContinent.jsx'
import SetOrderCountry from '../Filters/setOrderCountry'
import SetArea from '../Filters/setArea.jsx'
import SetActivity from '../Filters/setActivity.jsx'
import Clock from '../Clock/Clock'



function Home () {

  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.allCountry)
   
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 9;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

  const paged = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  function handleReset(e){
    e.preventDefault();
    dispatch(getCountries())
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getAllActivities());
  },[dispatch])

  return(

      <div className={style.img}>
        <div className={style.container}>
          <nav className={style.navClock}>
              <Clock />
          </nav>
          <nav className={style.nav}>
            <Link to="/home"><button className={style.button}> Home </button> </Link>
            <Link to='/activity'><button className={style.button}  > Activity Create</button> </Link>
            <Link to=''><button  onClick={(e)=>handleReset(e)} className={style.button}> Favorites</button> </Link>  
            <Search/>
          </nav>
          <nav className={style.nav2}>
            <SetContinent/>
            <SetOrderCountry/>
            <SetArea/> 
            <SetActivity/>
          </nav>
          <Pagination 
            countriesPerPage ={countriesPerPage}
            allCountries={allCountries.length}
            paged={paged}
          />
        <div className={style.cards}>
          {
            currentCountries.length ?   
            currentCountries.map( (c) => {
                return (
                  <div key={c.id}>
                    <Card flag={c.flag} name={c.name} continent={c.continent} id={c.id}/>
                    {/* pasarle un country={c} que tendria guardado todo  */}
                  </div>
                )
            }) : (<div  className={style.imagen}><img src={gif} alt=" "></img></div>)
          }
        </div> 
      </div>
    </div>       

  )
    
}

export default Home;