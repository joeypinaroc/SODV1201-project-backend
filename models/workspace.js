const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    // add columns: address, sqft, parking, public, smoking, price
    id: Number,
    owner: Number,
    title: String,
    location: String,
    desc: String,
    capacity: Number,
    amenities: String,
    address: String,
    squareFootage: Number,
    parking: Boolean,
    publicTransport: Boolean,
    smoking: Boolean,
    price: Number,
    availability: [Number], //0=Sun, 1=Mon,..., 6=Sat
    bookings: [Number]
}, {collection: 'workspaces'})

module.exports = mongoose.model('Workspace', workspaceSchema);