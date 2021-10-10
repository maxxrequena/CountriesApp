import React from 'react'; 
import { useDispatch} from 'react-redux';
import{ getFilterCountry, setArea } from '../../actions/actions';
import style from '../Filters/filters.module.css'


function SetArea(){

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(setArea(e.target.value))
        dispatch(getFilterCountry({area:e.target.value}))
    }

    return (
        <div className={style.select}>
            <select onChange={handleSelect}>
                <optgroup label="Area for Km2">
                    <option value="Def">Default Area</option>
                    <option value="Asc">Ascendente</option>
                    <option value="Desc">Descendente</option>
                </optgroup>
            </select>
        </div>
    )

}

export default SetArea;