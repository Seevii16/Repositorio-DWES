const express = require('express');

const server = express();

server.get('/password', function(req, res) {
    const { password } = req.headers;
    if (password === 'patata') {
        res.status(200).send("Bienvenid@, disfrute del contenido");

    } else {
        res.status(401).send("Acceso restringido, por favor, incluya la palabra secreta en el parametro 'password'en la cabecera de la peticion")
    }
});
let port = 3000;
server.listen(port, () => {
    console.log(`Example app listening port ${port} `);
});