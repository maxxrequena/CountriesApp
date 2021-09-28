const { Router } = require('express');
const router = Router();
const { activityCreate } = require('../controllers/activity');

router.post('/', activityCreate );

module.exports = router;