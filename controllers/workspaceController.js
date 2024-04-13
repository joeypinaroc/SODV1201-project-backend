const workspaceData = require('../models/workspace');

const getAllWorkspaces = async(req, res) => {
    try 
    {
        const workspaces = await workspaceData.find();
        res.json(workspaces);
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
}
const createOneWorkspace = async(req, res) => {
    const workspace = new workspaceData({
    id: req.body.id,
    owner: req.body.owner,
    title: req.body.title,
    location: req.body.location,
    desc: req.body.desc,
    capacity: req.body.capacity,
    amenities: req.body.amenities,
    availability: req.body.availability, //0=Sun, 1=Mon,..., 6=Sat
    bookings: req.body.bookings
    })

    try
    {
        const newWorkspace = await workspace.save();
        res.json(newWorkspace);
    }
    catch (err)
    {
        res.status(400).json({message: err.message});
    }
}

module.exports = {getAllWorkspaces, createOneWorkspace};