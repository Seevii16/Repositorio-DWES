const jwt = require("jsonwebtoken");

function getToken(req, res) {
    const user = {
        id: 1,
        name: "user",
        email: "user@email.com"
    }
    jwt.sign({ user }, 'secretkey', { expiresIn: '40s' }, (err, token) => {
        res.json({
            token
        });
    });
}

module.exports = { getToken };