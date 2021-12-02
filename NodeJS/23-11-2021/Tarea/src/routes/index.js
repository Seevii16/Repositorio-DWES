const express = require('express');


const { createUserController } = require('../controllers/createUser');
const { deleteUser, deleteUserController } = require('../controllers/deleteUser');
const { getUsersController } = require('../controllers/getUser');
const { putUser, putUserController } = require('../controllers/putUser');



const router = express.Router();


router.post('/users', createUserController);
router.delete('/users', deleteUserController);
router.get('/users', getUsersController);
router.put('/users', putUserController)


module.exports = router;