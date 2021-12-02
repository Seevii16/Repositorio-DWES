const users = require('../loaders/users.json');

console.log(users);

function createUserController(req, res) {

    const { id, name, pass } = req.body;
    if (id && name && pass) {
        const id = users.length + 1;
        const newUser = {...req.body, id };
        console.log(newUser);

        //users.push
        users.push(newUser);
        res.status(200).json(users);
    } else {
        res.status(500).send('Error 500 - Internal server error');
    }
}



//router.post('/users', (req, res) => {});

module.exports = { createUserController };