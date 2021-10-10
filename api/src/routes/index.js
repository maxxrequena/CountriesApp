const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const routeActivity = require('./activity.js')
const routeCountries = require('./country.js')
const routeFavorites = require('./favorites.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', routeCountries)
router.use('/activity', routeActivity);
router.use('/favorites', routeFavorites);


module.exports = router;
