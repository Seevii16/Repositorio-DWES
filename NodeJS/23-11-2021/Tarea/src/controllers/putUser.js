const _ = require('underscore') //lul se puede guardar con un guion abajo

const users = require('../loaders/users.json');
console.log(users);

function putUserController(req, res) {
    res.send(putUser());
}

function putUser() {
    const { id } = req.params;
    const { name, pass } = req.body;

    if (id && name && pass) {

        _.each(users, (user, i) => {
            if (user.id == id) {
                user.name = name;
                user.pass = pass;
            }
        });

        res.json(users);

    } else {
        res.status(500).json({ error: 'Error 500 - Internal server error' });
    }
}


module.exports = { putUserController, putUser };