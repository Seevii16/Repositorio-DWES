const { Router } = require('express');

const { createNote } = require('../controllers/createNote');

const router = Router();

router.post('/notes', createNote);

module.exports = router;