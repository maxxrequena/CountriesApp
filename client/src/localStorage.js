export const loadState = () => {
    try {
        var favorites = [],
            keys = Object.keys(localStorage),
             i = keys.length;
        
        while (i > 0) {
            
            favorites.push(localStorage.getItem(keys[i]));
            i--;
        }
        
        return favorites;
    } catch (error) {
        console.log(undefined)
    }
}

export const saveState = (country) => {
    try {
        const serialState = JSON.stringify(country);
        localStorage.setItem(((country.id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}

export const removeState = (country) => {
    try {
        const serialState = JSON.stringify(country);
        localStorage.removeItem(((country.id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}