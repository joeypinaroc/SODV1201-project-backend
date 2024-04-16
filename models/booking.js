const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: Number,
    workspaceId: Number,
    workspaceName: String,
    owner: Number,
    bookerId: Number,
    bookerUsername: String,
    date: Date,
    price: Number
}, {collection: 'bookings'})

module.exports = mongoose.model('Bookings', bookingSchema);