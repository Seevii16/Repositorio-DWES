const data = require('../data/books');

function books(req, res, next) {
    const filters = req.query;
    const filteredBooks = data.filter(book => {
        let isValid = true;
        for (key in filters) {
            console.log(key, book[key], filters[key]);
            isValid = isValid && book[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredBooks);
}
module.exports = {
    books

}