const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res.sendFile(__dirname+'/error.html');
})
app.get('/page', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})
 
app.listen(3000)