import React from 'react'; 
import { useDispatch} from 'react-redux';
import{ getFilterCountry, setArea } from '../../actions/actions'


function SetArea(){

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        dispatch(setArea(e.target.value))
        dispatch(getFilterCountry({area:e.target.value}))
    }

    return (
        <div>
            <select onChange={handleSelect}>
                <optgroup label="Area for Km2">
                    <option value="Def">Default</option>
                    <option value="Asc">Ascendente</option>
                    <option value="Desc">Descendente</option>
                </optgroup>
            </select>
        </div>
    )

}

export default SetArea;