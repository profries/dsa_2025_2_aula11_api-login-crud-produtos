const jwt = require("jsonwebtoken");

const SECRET = "Sen@c2025";

function criarToken(payload) {
    const token = jwt.sign(payload, SECRET, { expiresIn: '1h'});
    return token;
}

module.exports = {
    criarToken
}