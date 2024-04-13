const mongoose = require('mongoose');

const workspaceSchema = new mongoose.Schema({
    id: Number,
    owner: Number,
    title: String,
    location: String,
    desc: String,
    capacity: Number,
    amenities: String,
    availability: [Number], //0=Sun, 1=Mon,..., 6=Sat
    bookings: [Number]
}, {collection: 'workspaces'})

module.exports = mongoose.model('Workspace', workspaceSchema);