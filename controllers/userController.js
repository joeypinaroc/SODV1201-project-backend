const userData = require('../models/user');

// get, post, delete controllers
const getAllUsers = async(req, res) => {
    try 
    {
        const users = await userData.find();
        res.json(users);
    }
    catch (err)
    {
        res.status(500).json({message: err.message});
    }
}
const getOneUser = async(req, res) => {
    try 
    {
        let oneUser = await userData.find({"userId": req.params.id});
        res.json(oneUser); 
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}
const createOneUser = async(req, res) => {
    let user_id = await userData.countDocuments() + 1;
    const user = new userData({
    userId: user_id,
    userType: req.body.userType,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone
    })

    try
    {
        const newUser = await user.save();
        res.json(newUser);
    }
    catch (err)
    {
        res.status(400).json({message: err.message});
    }
}
const deleteOneUser = async(req, res) => {
    try
    {
        let deletedUser = await userData.findOneAndDelete({"userId": req.params.id});
        if(deletedUser == null)
        {
            res.status(404).json({message: 'Cannot find user'});
        }
        else
        {
            res.json(deletedUser);
        }
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
    res.json(userData);
}
module.exports = { getAllUsers, getOneUser, createOneUser, deleteOneUser };