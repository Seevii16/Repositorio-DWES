const fs = require('fs');
const { giveNotes } = require("../helper");
const { allNotes } = require('./verifyAdmin');
const file = 'data';


async function createNote(req, res) {
    const name = req.params.name;
    const content = req.body;
    console.log(allNotes);
    return fs.writeFileSync(`${giveNotes}/${file}/${name}.note`, `${content.message}`);
}

module.exports = { createNote };