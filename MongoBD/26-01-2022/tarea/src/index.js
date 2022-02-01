const express = require('express');
const app = express();

const dataRoute = require('./routes/data')

require('./bbdd')

app.use(express.json())

app.use(dataRoute);

app.listen(3000);

console.log('Server on port 3000');