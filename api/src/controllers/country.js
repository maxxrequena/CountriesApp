const {Country, Activity} = require('../db');
const axios = require('axios');
// const { Op } = require('sequalize');

async function getCountriesApi (req, res, next){

    try {
        const getApi = await axios.get(' https://restcountries.com/v2/all');
        const getCountries = await getApi.data;
        console.log("get de la api con paises", getCountries)
        getCountries.map( async c => {
            const {country} = await Country.findOrCreate({
                where: {
                    id: c.alpha3Code
                },

                defaults: {
                    id: c.alpha3Code,
                    name: c.name,
                    flag: c.flag,
                    continent: c.region,
                    capital: c.capital,
                    subregion: c.subregion,
                    area: c.area,
                    poblation: c.population
                }
            })
            return {country};
        })
    
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getCountriesApi
}