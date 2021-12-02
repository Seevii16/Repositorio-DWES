const express = require('express');

const { getUsersController } = require('../controllers/getUser');

const router = express.Router();

router.get('/', getUsersController);


module.exports = router;