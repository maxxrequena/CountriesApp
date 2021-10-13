import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activityFilter } from '../../actions/actions.js'
import style from '../Filters/filters.module.css'

function SetActivity(){

    const dispatch = useDispatch();
    const allActivities = useSelector(state => state.allActivities)
    
    function handleFilterActivity(e){
        dispatch(activityFilter(e.target.value))
    }
    
    return (
        <div className={style.select}>
            <select onChange={(e) => handleFilterActivity(e)}>
                <optgroup label="Actividad">
                    <option value='All' > All Activity</option>
                    { 
                        allActivities.map(a => 
                          <option key={a.id} value={a.name}>{a.name}</option>
                        )
                    }
                </optgroup>
            </select>
        </div>
    )
}

export default SetActivity;