const express = require('express');
const app = express();

const productsRoute = require('./routes/products')

require('./bbdd')

app.use(express.json())

app.use(productsRoute);

app.listen(3000);

console.log('Server on port 3000');