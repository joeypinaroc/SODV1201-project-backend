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
    let bk_id = await bookingData.countDocuments() + 1;
    const booking = new bookingData({
        bookingId: bk_id,
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
    try
    {
        let deletedBooking = await bookingData.findOneAndDelete({"id": req.params.id});
        if(deletedBooking == null)
        {
            res.status(404).json({message: 'Cannot find booking'});
        }
        else
        {
            res.json(deletedBooking);
        }
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
    res.json(bookingData);
}

module.exports = {getAllBookings, createOneBooking, deleteOneBooking};