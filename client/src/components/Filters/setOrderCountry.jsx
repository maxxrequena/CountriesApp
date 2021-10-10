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
                <optgroup label="Alphabetic Order">
                    <option value="Def">Default Order</option>
                    <option value="Asc">A -Z</option>
                    <option value="Desc">Z - A</option>
                </optgroup>
            </select>
        </div>
     )

}

export default SetOrderCountry;