const mongoose = require('mongoose');

const config = require('./index');

async function initDatabase() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(config.DB_URI);

    console.log("DB connected!"); // of the async function fails, it will not come to this line
}

module.exports = initDatabase;