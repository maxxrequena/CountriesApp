const { Activity, Country} = require('../db');
// const { v4: uuidv4 } = require('uuid');

async function activityCreate(req, res, next){

    const { name, difficulty, duration, season, countryId} = req.body; 

    try {

        // let id = uuidv4();
        let newActivity = await Activity.create({
            name,
            difficulty, 
            duration,
            season
        })
        const country = await Country.findOne({
            where:{
                id :countryId
            }
        })
        newActivity.addCountry(country)
        res.json(newActivity);
        
    } catch (error) {
        next(error);
        console.log("newActivityError")
    }
}

module.exports = {
    activityCreate
}