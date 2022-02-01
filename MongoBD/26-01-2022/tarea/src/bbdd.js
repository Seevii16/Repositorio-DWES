const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sample_watherdata')
    .then(db => console.log(db.connection.host))
    .catch(err => console.error(err));