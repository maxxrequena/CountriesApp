import React from 'react'; 
import { useDispatch} from 'react-redux';
import { getFilterCountry, setOrder } from '../../actions/actions'
import style from '../Filters/filters.module.css'
     

function SetOrderCountry () {

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(setOrder(e.target.value))
        dispatch(getFilterCountry({order: e.target.value}))
    }

    return(
       
        <div className={style.select}>
            <select onChange={handleSelect}>
                <option value="Def">Default</option>
                <option value="Asc">Ascendente</option>
                <option value="Desc">Descendente</option>
            </select>
        </div>
     )

}

export default SetOrderCountry;