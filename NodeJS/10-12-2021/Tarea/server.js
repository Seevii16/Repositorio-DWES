const express = require('express');
const app = express();
const multer = require('multer');
const mimeTypes = require('mime-types');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


const storage = multer.diskStorage({
    destination: 'carga/',
    filename: function(req, file, callback) {
        callback("", Date.now() + "." + mimeTypes.extension(file.mimetype));
    }
});


//middleware
const upload = multer({
    storage: storage
});

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/vista/index.html");
});

app.post("/files", upload.single('avatar'), (req, res) => {
    res.status(200).send("Accion Completada");
});

app.get('/descargar', function(req, res) {

    var file = __dirname + '/carga/Archivo1.txt';

    var filename = path.basename(file);
    var mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);

    var filestream = fs.createReadStream(file);
    filestream.pipe(res);
});

app.listen(3000, () => console.log("El servidor se incia en el puerto 3000"));