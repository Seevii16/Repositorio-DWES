const _ = require('underscore')



function deleteUserController(req, res) {
    res.send(deleteUser());
}

function deleteUser() {
    const { id } = req.params;
    _.each(users, (usuario, i) => {
        if (usuario.id == id) {
            users.splice(i, 1);
        }
    });

    console.log(req.params);
    res.send('Usuario eliminado');
    res.send(users);
}
module.exports = { deleteUserController, deleteUser };