const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const reactionRoutes = require('./reaction-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/reactions', reactionRoutes);
router.use('/user', userRoutes);

module.exports = router;