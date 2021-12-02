const express = require('express');

const { createUserController } = require('../controllers/createUser');

const router = express.Router();

router.post('/', createUserController);


module.exports = router;