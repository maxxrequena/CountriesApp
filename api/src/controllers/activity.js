const { Activity, Country} = require('../db');
// const { v4: uuidv4 } = require('uuid');

async function activityCreate(req, res, next){

    const { name, difficulty, duration, season, idCountry} = req.body; 
    console.log("ID BACK", idCountry);
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

module.exports = {
    activityCreate
}