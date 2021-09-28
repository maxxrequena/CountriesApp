const {Router} = require('express')
const axios = require('axios');
const { Country, Activity, Activity_Country } = require('../db');
const { Op } = require('sequelize');

const router = Router();

async function getCountriesApi (){

    try {
        
        let checkDb = await Country.findAll();
        if(checkDb.length > 0) {
            return checkDb;
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
            return countriesDb;
        }
        
        
    } catch (error) {
        console.log(error);
    }
}

async function getCountries(req, res, next){

    await getCountriesApi();
    
    const { name } = req.query;
    console.log("name de query", name)
    
    try {
        if(name){
            console.log("dentro del IF con name ", name)
            const countries = await Country.findAll({

                attributes: [
                    "id", 
                    "name", 
                    "flag", 
                    "region", 
                    "area",
                    "subregion",
                    "poblation"
                ],
                include: Activity,
                where:{
                    name: {
                        [Op.iLike] : `%${name}%`
                    }
                },
            })
            if(countries.length ){
                return res.json(countries) 
            } else {
                return res.status(400).send("Country not found")
            }
        } 
        else {
            const countries = await Country.findAll({
                attributes: [
                    "id", 
                    "name", 
                    "flag", 
                    "region", 
                    "area",
                    "subregion",
                    "poblation"],
                include: Activity
            })
            console.log("paso por countries Country FindAll", countries);
            return res.send(countries)
        }
        
    } catch (error) {
        next(error);
        console.log("error get countries", error)
    }
}

async function getCountryById (req, res, next){

    const { id } = req.params;
    id = id.toLocaleUpperCase();
    let activityForId = [];
    let detailActivity = [];
    let countryActivity = {};

    try {
        let country = await Country.findByPk(id, {include:{model: Activity}})
        let activities = await Activity_Country.findAll({where:{countryId: id}})

        for (let i = 0; i < activities.length; i++) {
            activityForId.push(activities[i].dataValues.activityId)
        }
        for (let i = 0; i < activityForId.length; i++) {
            const findActivity = await Activity.findByPk(activityForId[i])
            detailActivity.push(findActivity.dataValues)            
        }
        countryActivity = {...country.dataValues, activities: detailActivity}
        return res.json(countryActivity);
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getCountries,
    getCountryById     
};