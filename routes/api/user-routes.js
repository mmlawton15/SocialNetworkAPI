const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller'); //how do i remove a user thoughts when they're deleted?

//SET UP GET ALL AND POST AT API/USER
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

//SET UP GET ONE, PUT AND DELETE AT /API/USER/ID
router    
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;