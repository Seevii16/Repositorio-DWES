const fs = require('fs');
const { giveNotes } = require("../helper");
const file = 'data';
const { allNotes } = require("./verifyAdmin");

async function deleteNote(req, res) {
    const id = req.params.id;


    for (let i = 0; i <= allNotes.length; i++) {
        if (i == id) {
            console.log(allNotes);
            fs.unlinkSync(`${giveNotes}/${file}/${allNotes[i].name}`);
            console.log(allNotes);
        }
    }
}

module.exports = { deleteNote };