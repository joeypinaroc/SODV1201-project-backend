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
    let oneUser = userData.filter(user => user.id == req.params.id)
    res.json(oneUser); 
}
const createOneUser = async(req, res) => {
    const user = new userData({
    userId: req.body.userId,
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
    let index = userData.findIndex(user => user.username == req.params.username)
    userData.splice(index, 1);
    res.json(userData);
}
module.exports = { getAllUsers, getOneUser, createOneUser, deleteOneUser };