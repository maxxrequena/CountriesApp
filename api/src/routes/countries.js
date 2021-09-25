const { Router } = require('express');
const {getCountriesApi} = require('../controllers/country.js');

const router = Router();

router.get('/', getCountriesApi)

module.exports = router;