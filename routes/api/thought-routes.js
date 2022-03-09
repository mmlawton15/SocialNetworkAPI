const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// route to /:id/reactions /api/thoughts/THOUGHTID/reactions
// -- post 
router
.route('/:thoughtId/reaction')
  .post(addReaction);

// -- delete
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;