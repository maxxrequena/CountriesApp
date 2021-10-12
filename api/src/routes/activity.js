const { Router } = require('express');
const router = Router();
const { activityCreate, getAllActivities } = require('../controllers/activity');

router.post('/', activityCreate );
router.get('/', getAllActivities)

module.exports = router;