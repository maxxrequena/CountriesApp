const { Router } = require('express');
const router = Router();
const { addFavorites } = require('../controllers/favorites');

router.post('/', addFavorites );

module.exports = router;