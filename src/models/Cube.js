const mongoose = require('mongoose');

// defining the schema and some basic validators
const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,

    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    }, 
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }]
});

const Cube = mongoose.model('Cube', cubeSchema); // creating the model, 
// passing the name and what is the schema (in the db -> the name will be with small letters and plural)

module.exports = Cube;