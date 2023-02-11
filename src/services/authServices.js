const User = require('../models/User');

exports.getUserByUsername = (username) => {
    return User.findOne({ username });
}

exports.register = (username, password) => {
    return User.create({ username, password }); // returns a document
}