const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: Number,
    userType: String,
    username: String,
    password: String,
    email: String,
    phone: Number
}, {collection: 'users'})

module.exports = mongoose.model('User', userSchema);