const router = require('express').Router();
const { addReaction, removeReaction } = require('../../controllers/reaction-controller');

// /api/reactions/thoughtid
router.route('/:thoughtId').post(addReaction);

//api/reactions/thoughtid/reactionid
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;