const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tarea')
    .then(db => console.log(db.connection.host))
    .catch(err => console.error(err));