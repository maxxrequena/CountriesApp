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
                flag: e.flags[0] && e.flags[1] || e.flag ,
                continent: e.region,
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
    
    // console.log("name de query", name)
    try {
        
        let { name, page } = req.query;
        
        if(name){
            // console.log("dentro del IF con name ", name)
            const country = await Country.findAll({

                attributes: [
                    "id", 
                    "name", 
                    "flag",
                    "capital", 
                    "continent", 
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
            return country.length ? res.json(country) : res.status(400).send("Country not found")
        } else {
            const countries = await Country.findAll({
                attributes: [
                    "id", 
                    "name", 
                    "flag",
                    "capital", 
                    "continent", 
                    "area",
                    "subregion",
                ],
                include: Activity
            })
            return res.send(countries);
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

async function filtersCountries(req, res, next){

    const { order, area } = req.query;

    try {
        if(order){
            let countOrder = await Country.findAll({
                attributes: [
                    "id", 
                    "name", 
                    "flag",
                    "capital", 
                    "continent", 
                    "area",
                    "subregion",
                ],
                include: Activity //pensar en traer el id correspondiente
            })
            if(order === "asc" || !order || order === ""){
                countOrder = countOrder.sort((a, b) => {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                })
            }else {
                countOrder = countOrder.sort((a, b) => {
                    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
                })
            }
            return res.send(countOrder);
        }
        if(area){

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
            
        }
    } catch (error) {
        next(error);
    }
}



module.exports = {
    getCountries,
    getCountryById,
    filtersCountries     
};