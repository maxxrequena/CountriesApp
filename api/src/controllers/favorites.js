const { Activity, Country, Favorites } = require('../db');
// const { v4: uuidv4 } = require('uuid');

async function addFavorites(req, res, next){

    const { idCountry} = req.body; 

    try {

        let newFavortie = await Favorites.create({
            identitity: idCountry
        })
        // const country = await Country.findOne({
        //     where:{
        //         id :idCountry
        //     },
        //     include: Activity
        // })
        let country = await Country.findByPk(idCountry, {include:{model: Activity}})
       
        // console.log("new", newFavortie)
        // console.log("country", country)
        
        await newFavortie.addCountry(country)
        res.json(newFavortie);
        
    } catch (error) {
        next(error);
        console.log("addFavoriteError")
    }
}

module.exports = {
    addFavorites
}