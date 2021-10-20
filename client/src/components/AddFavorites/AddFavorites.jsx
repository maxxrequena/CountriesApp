import React, {  useState } from "react";
import * as BsIcons from "react-icons/bs";
import { saveState, removeState, loadState } from "../../localStorage";


function AddFavorites({country}){
    
    // const country = useSelector(state => state.allCountry)

    var favorites = loadState();
    const [favs, setFavs] = useState('')

    return(
        <div>
            {favorites.includes(JSON.stringify(country)) ? (
              <BsIcons.BsBookmarkFill
                onClick={() => {
                  removeState(country);
                  favorites = loadState()
                  setFavs('eliminado de favs')
                  console.log(favs)
                }
                } />
            ) : (
              <BsIcons.BsBookmark
                onClick={() => {
                  saveState(country);
                  favorites = loadState()
                  setFavs('agregado a favs')
                  console.log(favs)

                }} />
            )}
        </div>
    )
}

export default AddFavorites;