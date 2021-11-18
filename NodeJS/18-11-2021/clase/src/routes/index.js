const express = require('express');

const { rootController } = require('../controllers');
const { ping } = require('../controllers/ping');



const router = express.Router();

router.get('/', rootController);
router.get('/ping', ping);


module.exports = router;