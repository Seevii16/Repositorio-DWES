const express = require("express");
const app = express();

function controller(req, res, next) {
    try {
        throw Error("Hmmmm... there is an error over here ....");
    } catch (err) {
        return next(err);
    }
}

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
    res.status(statusCode).send("Server Error");
}

app.use(controller);
app.use(errorHandler);

app.listen(3000);