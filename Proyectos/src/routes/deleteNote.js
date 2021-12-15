const { Router } = require('express');

const { deleteNote } = require('../controllers/deleteNote');

const router = Router();

router.delete('/notes/:id', deleteNote);

module.exports = router;