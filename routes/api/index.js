const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');

// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;