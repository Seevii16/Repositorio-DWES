const express = require('express');

const { putUser, putUserController } = require('../controllers/putUser');

const router = express.Router();

router.put('/', putUserController);


module.exports = router;