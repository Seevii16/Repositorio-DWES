const express = require('express');

const { deleteUser, deleteUserController } = require('../controllers/deleteUser');

const router = express.Router();

router.delete('/', deleteUserController);


module.exports = router;