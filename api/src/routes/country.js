const {Router} = require('express')
const {getCountries} = require('../controllers/country.js')

const router = Router();

router.get('/', getCountries);

module.exports = router;