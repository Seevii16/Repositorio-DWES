const users = require('../loaders/users.json');
console.log(users);

function getUsersController(req, res) {
    res.json(users);
}


module.exports = { getUsersController };