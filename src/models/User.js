const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema ({
    username: {
        type: String, 
        required: true, 
        minLength: 3, 
    }, 

    password: {
        type: String, 
        required: true,
        minLength: [6, 'Password is too short!'],
    }
});

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then(hash => { // this is the result after the salt
        this.password = hash; // replacing the original password right before saving in the db
        next();
    });

});

userSchema.method('validatePassword', function(password){
    return bcrypt.compare(password, this.password); // this.password is the encrypted one
})

const User = mongoose.model('User', userSchema); 

module.exports = User; 