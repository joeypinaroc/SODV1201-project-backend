const bookingData = require('../models/booking');

const getAllBookings = async(req, res) => {
    try
    {
        const bookings = await bookingData.find();
        res.json(bookings);
    }
    catch
    {
        res.status(500).json({message: err.message});
    }
}
const createOneBooking = async(req, res) => {
    const booking = new bookingData({
        bookingId: req.body.bookingId,
        workspaceId: req.body.workspaceId,
        workspaceName: req.body.workspaceName,
        owner: req.body.owner,
        bookerId: req.body.bookerId,
        bookerUsername: req.body.bookerUsername,
        date: req.body.date,
        price: req.body.price
    })
    try
    {
        const newBooking = await booking.save();
        res.json(newBooking);
    }
    catch(err)
    {
        res.status(400).json({message: err.message});
    }
}
const deleteOneBooking = async(req, res) => {
    let index = bookingData.findIndex(booking => booking.bookingId == req.params.bookingId)
    bookingData.splice(index, 1);
    res.json(bookingData);
}

module.exports = {getAllBookings, createOneBooking, deleteOneBooking};