const fs = require('fs');
const { giveNotes } = require("../helper");
const file = 'data';
const { allNotes } = require("./verifyAdmin");


async function updateNote(req, res) {

    const content = req.body;
    const id = req.params.id;



    for (let i = 0; i <= allNotes.length; i++) {
        if (i == id) {
            fs.writeFileSync(`${giveNotes}/${file}/${allNotes[i].name}`, `${content.content}`);
            console.log(allNotes);
        }
    }
}

module.exports = { updateNote };