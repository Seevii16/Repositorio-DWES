const express = require('express');

const { rootController } = require('../controllers');
const { users } = require('../controllers/users');
const { books } = require('../controllers/books');



const router = express.Router();

router.get('/', rootController);
router.get('/users', users);
router.get('/books', books);

module.exports = router;