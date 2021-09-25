const { Router } = require('express');
const { activityCreate } = require('../controllers/activity.js');


const router = Router();

router.post('/', activityCreate);


module.exports = router;