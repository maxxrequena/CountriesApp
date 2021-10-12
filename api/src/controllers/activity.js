const { Activity, Country} = require('../db');
// const { v4: uuidv4 } = require('uuid');

async function activityCreate(req, res, next){

    const { name, difficulty, duration, season, idCountry} = req.body; 
  
    try {

        let newActivity = await Activity.create({
            name, 
            difficulty,
            duration,
            season
        })
        const country = await Country.findAll({
            where:{
                id :idCountry
            }
        })
        await newActivity.addCountry(country)
        res.json(newActivity);
        
    } catch (error) {
        next(error);
        console.log("activityCreateError")
    }
}

async function getAllActivities (req, res, next){

    try {
        const activities = await Activity.findAll({
            include: Country
        });
        return res.json(activities)
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    activityCreate,
    getAllActivities
}