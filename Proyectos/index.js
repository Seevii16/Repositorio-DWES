const express = require('express');

const loaders = require('./src/loaders');
const logger = require('./src/utils/logger');
const router = require('./src/routes');
const server = express();

const port = 4000;

loaders.init(server);

server.listen(port, () => {
    logger.info(`Example app listening on ${port}`)
});


router.get("/public", (req, res) => {
    res.status(200).send('Acceso Publico si quieres acceder al contenido registrese ^^');
});