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

export const saveState = (evento) => {
    try {
        const serialState = JSON.stringify(evento);
        localStorage.setItem(((evento.id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}

export const removeState = (evento) => {
    try {
        const serialState = JSON.stringify(evento);
        localStorage.removeItem(((evento.id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}