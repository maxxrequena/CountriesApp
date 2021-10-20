const { Router } = require('express');

const router = Router();
const routeActivity = require('./activity.js')
const routeCountries = require('./country.js')


router.use('/countries', routeCountries)
router.use('/activity', routeActivity);

module.exports = router;
