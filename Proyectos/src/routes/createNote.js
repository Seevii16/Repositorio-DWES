const { Router } = require('express');

const { createNote } = require('../controllers/createNote');

const router = Router();

router.post('/notes/:name', createNote);

module.exports = router;