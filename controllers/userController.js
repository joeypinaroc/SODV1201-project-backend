const userData = require('../models/user');

// authentication controllers
// const loginUser = async (req, res) => {
//     const {userId, userType, username, password, email} = req.body;

//     try
//     {
//         const user = await userData.findOne({ $or: [{username}, {password}] }); // find username in database
//         if(!user)
//         {
//             return res.status(401).json({message: 'Invalid username or password'});
//         }

//         // generate JWT
//         const token = generateToken(user.userId, user.userType, user.username, user.password, user.email);
//         res.json({token});
//     }
//     catch(err)
//     {
//         res.status(500).json({message: error.message});
//     }
// }

// const signupUser= async (req, res) => {
//     const { userId, userType, username, password, email }= req.body;

    // try
    // {
    //     // check if username or email is already registered
    //     const existingUser = await userData.findOne({ $or: [{ username }, { email }] });
    //     if(existingUser)
    //     {
    //         return res.status(400).json({ message: 'Username or email is already registered'});
    //     }

    //     // create new user object
    //     const newUser = new userData({ userId, userType, username, password, email });
    //     // save to db
    //     const savedUser = await newUser.save();

//         // generate JWT for new user
//         const token = generateToken(savedUser.userId, savedUser.userType, savedUser.username, savedUser.password, savedUser.email);
//         res.json({ token });
//     }
//     catch(err)
//     {
//         res.status(500).json({message: err.message})
//     }
// }

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
const createOneUser = async(req, res) => {
    const user = new userData({
    userId: req.body.userId,
    userType: req.body.userType,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
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
module.exports = { getAllUsers, createOneUser, deleteOneUser };