const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    school: String
})

const userModel = mongoose.model('users',userschema);

module.exports = userModel;