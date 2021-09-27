const {Router} = require('express')
const axios = require('axios');
const {Country, Activity} = require('../db');
const { Op } = require('sequelize');

const router = Router();

async function getCountriesApi (req, res, next){

    try {
        
        let checkDb = await Country.findAll();
        if(checkDb.length > 0) {
            return res.send(checkDb);
        } else {
            const getApi = await axios.get('https://restcountries.com/v2/all');
            const getAllApi = getApi.data.map( e => { 
            return{
                id: e.alpha3Code ? e.alpha3Code : "Id",
                name: e.name ? e.name : e.demonym,
                flag: e.flags[0] ? e.flags[0] : e.flags[1],
                region: e.continent ? e.continent : "Continent",
                capital: e.capital ? e.capital : "Capital",
                subregion: e.region ? e.region : "Region",
                area: e.area ? e.area : "Area",
                poblation: e.population ? e.population : 0
            }
        })
            const countriesDb = await Country.bulkCreate(getAllApi);
            return res.send(countriesDb);
        }
        
        
    } catch (error) {
        next(error);
    }
}

router.get('/', getCountriesApi, async (req, res, next)=> {

    const { name } = req.query;
    console.log("name de query", name)
    try {
        if(name){
            console.log("dentro del IF con name ", name)
            const countries = await Country.findAll({
                where:{
                    name: {
                        [Op.iLike] : `%${name}%`
                    }
                },
                attributes: [
                    "name",
                    "id",
                    "flag",
                    "capital",
                    "region",
                    "subregion",
                    "area",
                    "poblation"
                ],
                include: Activity
            })
            return countries.length ? res.json(countries) : res.send("Country not found");
        } 
        else {
            const countries = await Country.findAll({
                attributes: [
                    "name",
                    "id",
                    "flag",
                    "capital",
                    "region",
                    "subregion",
                    "area",
                    "poblation"
                ],
                include: Activity 
            })
            // console.log("paso por countries Country FindAll", countries);
            return res.send(countries)
        }
        
    } catch (error) {
        console.log("error get countries", error)
    }
})



module.exports = router;