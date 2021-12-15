const { Router } = require('express');

const { verify } = require('../controllers/verifyAdmin');

const router = Router();

router.post('/', verify);

module.exports = router;