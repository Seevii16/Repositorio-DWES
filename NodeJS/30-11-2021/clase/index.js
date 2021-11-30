const express = require('express');

const bcrypt = require('bcrypt');

const app = express();



const hash = '$2b$10$2Yni5t/Qfv2CmpXFlU7t0.mVcTUm2J.xLfJThOTwdTiRGwawG0udG'



let port = 3000;

app.get('/password', function(req, res) {
    const { password } = req.headers;
    if (bcrypt.compareSync(password, hash)) {
        res.status(200).send('Acceso Autorizado');
    } else {
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };
});

app.listen(port, () => {
    console.log(`Example app listening port ${port} `);
});