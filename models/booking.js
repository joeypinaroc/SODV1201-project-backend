const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id: Number,
    workspaceId: Number,
    workspaceName: String,
    owner: Number,
    userId: Number,
    username: String,
    date: Date,
    price: Number
}, {collection: 'bookings'})

module.exports = mongoose.model('Bookings', bookingSchema);