const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
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

//delete friend and add friend at api/user/:userId/friends/:friendId
router 
    .route('/:userId/friends/:friendId')
    .post(addFriend);

router 
    .route('/:userId/friends/:friendId')
    .delete(deleteFriend);

module.exports = router;