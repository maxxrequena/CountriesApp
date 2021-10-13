const { Activity, Country} = require('../db');
const { Op } = require('sequelize')

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

async function deleteActivity (req, res, next){
    try {
        
        const {idA} = req.params
        const idSearch = 

        await Activity.destroy({
            where: {
                id: {
                  [Op.eq]: idA,
                },
            }
        })

        res.send(`Activity ${idA} delete`)
        
    } catch (error) {

        console.log("activityCreateError", error)
    }
}

module.exports = {
    activityCreate,
    getAllActivities,
    deleteActivity
}