  
const router = require('express').Router();

const { 
    createUser, 
    getAllUser, 
    getUserById, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend } = require('../../controllers/user-controller');


router.route('/')
    .post(createUser)
    .get(getAllUser);


router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

    
    module.exports = router;