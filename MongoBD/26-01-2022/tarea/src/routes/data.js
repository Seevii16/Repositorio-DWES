const { Router } = require('express');

const router = Router();

const Data = require('../models/data');

router.get('/data', async(req, res) => {
    const limit = parseInt(req.query.limit, 10) || 3
    const data = await Data(limit)
    res.json(data);
});

router.post('/data', async(req, res) => {
    console.log(req.body);
    const newData = new Data(req.body);
    const saveData = await newData.save();
    res.send(saveData);
});

module.exports = router;