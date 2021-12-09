const data = require('../data/books');

function books(req, res, next) {

    const { limit = 5, offset = 0, ...filters } = req.query;
    //res.send(paginacion)
    const filteredBooks = data.filter(book => {

        let isValid = true;
        for (key in filters) {
            console.log(key, book[key], filters[key]);
            isValid = isValid && book[key] == filters[key];
        }
        return isValid;
    });

    const paginacion = filteredBooks.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
    return res.send(paginacion);

}
module.exports = {
    books

}