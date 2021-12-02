const express = require('express');

const { books } = require('../controllers/books');

const router = express.Router();

router.get('/', books);


module.exports = router;