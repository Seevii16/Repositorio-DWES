const express = require('express');

const { fibonacciController, fibonacci } = require('../controllers/fibonacci');

const router = express.Router();

router.get('/', fibonacciController);


module.exports = router;