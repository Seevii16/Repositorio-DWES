const data = require('../data/users');

function users(req, res, next) {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
        let isValid = true;
        for (key in filters) {
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredUsers);
}
module.exports = {
    users

}