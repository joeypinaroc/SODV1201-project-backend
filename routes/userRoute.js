const express = require('express');
const routerU = express.Router();
const {loginUser, signupUser, getAllUsers, createOneUser} = require('../controllers/userController');

// user control routes
routerU.post('/signup', signupUser);
routerU.post('/loginUser', loginUser);

// get/post routes
routerU.get('/user', getAllUsers);
routerU.post('/user', createOneUser);

module.exports = routerU;