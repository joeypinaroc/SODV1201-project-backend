const express = require('express');
const routerU = express.Router();
const {getAllUsers, createOneUser, deleteOneUser} = require('../controllers/userController');

// get/post routes
routerU.get('/user', getAllUsers);
routerU.post('/user', createOneUser);
routerU.delete('/user/:username', deleteOneUser);

module.exports = routerU;