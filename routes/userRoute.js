const express = require('express');
const routerU = express.Router();
const {getAllUsers, createOneUser, deleteOneUser, getOneUser} = require('../controllers/userController');

// get/post routes
routerU.get('/user', getAllUsers);
routerU.get('/user/:id', getOneUser);
routerU.post('/user', createOneUser);
routerU.delete('/user/:id', deleteOneUser);

module.exports = routerU;