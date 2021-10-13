const { Router } = require('express');
const router = Router();
const { activityCreate, getAllActivities, deleteActivity } = require('../controllers/activity');

router.post('/', activityCreate );
router.get('/', getAllActivities);
router.delete('/:idA', deleteActivity)

module.exports = router;