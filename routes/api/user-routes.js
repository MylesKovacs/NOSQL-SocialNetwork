const router= require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router
    .route('/api/users')
    .get(getAllUser)
    .get(getUserById)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/api/users/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;