const express = require('express');

const { rootController } = require('../controllers');
const { fibonacciController, fibonacci } = require('../controllers/fibonacci');



const router = express.Router();

router.get('/', rootController);
router.get('/fibonacci', fibonacciController);


module.exports = router;