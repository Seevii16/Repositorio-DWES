const express = require('express');

const bcrypt = require('bcrypt');

const app = express();
//vip
const hash = '$2b$10$fr3jvf/n4HbR6fKos5ytGurAKZMXzOxAthBHtFEE.ATc4qWakFYlu';
//admin
const hash2 = '$2b$10$fbLr6RMl5hfH3LEgUAkKUOoyW/JHJJp.6RbWhiGCRwuhjo/2kXlXe';

let port = 3000;

app.get('/vip', function(req, res) {
    const { password } = req.headers;
    if (bcrypt.compareSync(password, hash)) {
        res.status(200).send('Acceso Autorizado a Vip');
    } else {
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };
});
app.get('/admin', function(req, res) {
    const { password } = req.headers;
    if (bcrypt.compareSync(password, hash2)) {
        res.status(200).send('Acceso Autorizado a Admin');
    } else {
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };
});
app.get('/public', function(req, res) {

    res.status(200).send('Acceso Autorizado');

});

app.listen(port, () => {
    console.log(`Example app listening port ${port} `);
});