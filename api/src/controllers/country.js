const {Router} = require('express')
const axios = require('axios');
const { Country, Activity, Country_Activity } = require('../db');
const { Op } = require('sequelize');

const router = Router();

async function getCountriesApi (){

    try {
        
        let checkDb = await Country.findAll();
        if(checkDb.length > 0) {
            return checkDb;
        } else {
            const getApi = await axios.get('https://restcountries.com/v3/all');
            const getAllApi = getApi.data.map( e => { 
            return {
                
                id: e.cca3 ? e.cca3 : e.cioc,
                name: e.name.common,
                flag: e.flag || e.flags[0],
                region: e.region,
                capital: e.capital && e.capital[0] || "Capital Default",
                subregion: e.subregion || "Region Default",
                area: e.area || "Area Default",
                
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
    // console.log("name de query", name)
    
    try {
        if(name){
            // console.log("dentro del IF con name ", name)
            const countries = await Country.findAll({

                attributes: [
                    "id", 
                    "name", 
                    "flag",
                    "capital", 
                    "region", 
                    "area",
                    "subregion",
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
                    "capital", 
                    "region", 
                    "area",
                    "subregion",
                ],
                include: Activity
            })
            // console.log("paso por countries Country FindAll", countries);
            return res.send(countries)
        }
        
    } catch (error) {
        next(error);
        console.log("error get countries", error)
    }
}

async function getCountryById (req, res, next){
    
    await getCountriesApi();
    
    let { id } = req.params;
    id = id.toLocaleUpperCase();
    
    let activityForId = [];
    let detailActivity = [];
    let countryActivity = {};

    try {
        let country = await Country.findByPk(id, {include:{model: Activity}})
        let activities = await Country_Activity.findAll({where:{countryId: id}})

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