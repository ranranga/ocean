const router = require('express').Router();
const jwt =  require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config');

module.exports = function(req, res, next) {
    let token = req.headers["authorization"];

    if (token) {
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) {
                res.json({
                    success: false,
                    message: 'Failed to authenticate token'
                });
            } else {

                req.decoded = decoded; // This will provide simple details of user profile e.g. "req.decoded.user.name" by decrypting token
                next();

            }
        });

    } else {

        res.status(403).json({
            success: false,
            message: 'No token provided'
        });
    }
}
