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
    try
    {
        let oneWs = await workspaceData.find({ "id": req.params.id });
        res.json(oneWs);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}
const createOneWorkspace = async(req, res) => {
    let ws_id = await workspaceData.countDocuments() + 1;
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
    try
    {
        await workspaceData.findOneAndUpdate({"id": req.params.id}, req.body);
        let updatedWorkspace = await workspaceData.find({"id": req.params.id});
        res.status(201).json(updatedWorkspace);
    }
    catch(err)
    {
        res.status(400).json({message: err.message});
    }
}
const deleteOneWorkspace = async(req, res) => {
    try
    {
        let deletedWorkspace = await workspaceData.findOneAndDelete({"id": req.params.id});
        if(deletedWorkspace == null)
        {
            res.status(404).json({message: 'Cannot find workspace'});
        }
        else
        {
            res.json(deletedWorkspace);
        }
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
    res.json(workspaceData);
}
module.exports = {getAllWorkspaces, getOneWorkspace, createOneWorkspace, editOneWorkspace, deleteOneWorkspace};