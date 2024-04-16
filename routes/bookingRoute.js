const express = require('express');
const routerB = express.Router();
const {getAllBookings, createOneBooking, deleteOneBooking} = require('../controllers/bookingController');

// get/post routes
routerB.get('/booking', getAllBookings);
routerB.post('/booking', createOneBooking);
routerB.delete('/booking/:id', deleteOneBooking);

module.exports = routerB;