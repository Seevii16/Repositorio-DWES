
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { giveNotes } = require("../helper");
const file = 'data';

function getFile() {
    return fs.readdirSync(`${giveNotes}/${file}`);
}

const saveNotes = getFile();

const allNotes = saveNotes.map(save => {
    const content = fs.readFileSync(`${giveNotes}/${file}/${save}`, 'utf-8');
    return { name: save, content: content };
});

async function verify(req, res, next) {
    const bearerHeader = await req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if (error) {
            res.sendStatus(403);
        } else {

            res.status(200).send(allNotes);
        }
    });
}



module.exports = { verify, allNotes }