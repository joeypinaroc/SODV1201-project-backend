const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// const bcrypt = require('bcrypt');

//create secret
const accessSecret = crypto.randomBytes(64).toString('hex');

const generateToken = (userId, userType, username, password, email) => {
    return jwt.sign({userId, userType, username, password, email}, accessSecret)
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // get token from Bearer TOKEN Headers in request
    if (token == null) return res.sendStatus(401); // check if token is null

    jwt.verify(token, accessSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

module.exports = {generateToken, authenticateToken};
