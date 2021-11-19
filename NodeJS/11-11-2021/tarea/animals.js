const express = require("express");
const router = express.Router();

const error = {
    code: 404,
    error: "Not Found",
    message: "Error: Path not found",
};
const dogWoof = {
    grow: "guau guau",
};
const catMiau = {
    grow: "miau",
};
const birdPio = {
    grow: "pio pio",
};
router.get("/", function(req, res) {
    console.log(error);
});

router.get("/dog", function(req, res) {
    console.log(dogWoof);
});
router.get("/cat", function(req, res) {
    console.log(catMiau);
});
router.get("/bird", function(req, res) {
    console.log(birdPio);
});

module.exports = router;