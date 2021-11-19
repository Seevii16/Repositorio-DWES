const express = require("express");
const animals = require('./animals');

const app = express();
app.listen(4000);

app.get("/", function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>Hello World!</h1></body></html>`);
});

app.get("/animals", function(req, res) {
    app.use('/animals', animals);
});


app.get("/query", function(req, res) {
    const { n } = req.query;
    // let numero = 4;
    if (n === undefined) {
        n = 100;
        for (let i = 0; i <= n; i++) {
            let total = n + i;

            res.status(200).send(`${total}`);
        }
    } else {
        for (let i = 0; i <= n; i++) {
            let total = n + i;

            res.status(200).send(`${total}`);
        }
    }
});

app.get("/params/:name", function(req, res) {
    let name = req.params.name;
    res.send(`Hello : ${name}`);
});

app.get("/header", function(req, res) {
    const errorObject = {
        code: 401,
        error: "Unauthorized",
        message: "Error: Set a token to login",
    };

    const { mycustomheader } = req.headers;
    if (mycustomheader === undefined) {
        console.log(errorObject);
        res.status(401).send(errorObject);
    } else {
        console.log(mycustomheader);
        res.status(200).send(mycustomheader);
    }
});