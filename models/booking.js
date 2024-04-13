const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id: Number,
    owner: Number,
    title: String,
    userId: Number,
    username: String
}, {collection: 'bookings'})

module.exports = mongoose.model('Bookings', bookingSchema);