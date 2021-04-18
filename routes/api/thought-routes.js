const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/api/thoughts')
    .get(getAllThoughts)
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);


router  
    .route('/api/thoughts/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);