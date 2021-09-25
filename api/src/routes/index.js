const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const routeActivity = require('./activity.js')
const routeCountries = require('./countries.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', routeCountries)
router.use('/activity', routeActivity);


module.exports = router;
