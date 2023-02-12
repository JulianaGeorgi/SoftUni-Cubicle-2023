const User = require('../models/User');

exports.getUserByUsername = (username) => {
    return User.findOne({ username });
}

exports.register = (username, password) => {
    return User.create({ username, password }); // returns a document
}

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    const isValid = await user.validatePassword(password);
    if (!user || !isValid) {
        throw 'Invalid username or password!';
    }

    return user;
}