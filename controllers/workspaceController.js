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
const getOneWorkspace = async(req, res) => {
    let oneWs = workspaceData.filter(ws => ws.id == req.params.id)
    res.json(oneWs);
}
const createOneWorkspace = async(req, res) => {
    let ws_id = workspaceData.length + 1;
    const workspace = new workspaceData({
    id: ws_id,
    owner: req.body.owner,
    title: req.body.title,
    location: req.body.location,
    desc: req.body.desc,
    capacity: req.body.capacity,
    amenities: req.body.amenities,
    address: req.body.address,
    squareFootage: req.body.squareFootage,
    parking: req.body.parking,
    publicTransport: req.body.publicTransport,
    smoking: req.body.smoking,
    price: req.body.price,
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
const editOneWorkspace = async(req, res) => {
    workspaceData.forEach(ws => {
        if(ws.id == req.params.id)
        // use owner username
        {
            ws.owner = req.body.owner,
            ws.title = req.body.title,
            ws.location = req.body.location,
            ws.desc = req.body.desc,
            ws.capacity = req.body.capacity,
            ws.amenities = req.body.amenities,
            ws.address = req.body.address,
            ws.squareFootage = req.body.squareFootage,
            ws.parking = req.body.parking,
            ws.publicTransport = req.body.publicTransport,
            ws.smoking = req.body.smoking,
            ws.price = req.body.price,
            ws.availability = req.body.availability,
            ws.bookings = req.body.bookings
        }
    })
    res.json(workspaceData);
}
const deleteOneWorkspace = async(req, res) => {
    let index = workspaceData.findIndex(ws => ws.id == req.params.id);
    workspaceData.splice(index, 1);
    res.json(workspaceData);
}
module.exports = {getAllWorkspaces, getOneWorkspace, createOneWorkspace, editOneWorkspace, deleteOneWorkspace};