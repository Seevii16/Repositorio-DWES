const { Router } = require('express');

const { updateNote } = require('../controllers/updateNote');

const router = Router();

router.put('/notes/:id', updateNote);

module.exports = router;