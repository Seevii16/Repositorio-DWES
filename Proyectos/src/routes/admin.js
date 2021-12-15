const { Router } = require('express');

const { admin } = require('../controllers/verifyAdmin');

const router = Router();

router.post('/', admin);

module.exports = router;