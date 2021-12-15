const { Router } = require('express');

const token = require('./login');

const password = require('./verify');

const createNote = require('./createNote');

const updateNote = require('./updateNote');

const deleteNote = require('./deleteNote');

const router2 = Router();

router2.use('/login', token);

router2.use('/verify', password);

router2.use('/admin', password);

router2.use('/create', password);

router2.post('/notes/:name', createNote);

router2.put('/notes/:id', updateNote);

router2.delete('/notes/:id', deleteNote);



module.exports = router2;