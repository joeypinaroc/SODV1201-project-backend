const express = require('express');
const routerW = express.Router();
const {getAllWorkspaces, createOneWorkspace} = require('../controllers/workspaceController');

routerW.get('/workspace', getAllWorkspaces);
routerW.post('/workspace', createOneWorkspace);

module.exports = routerW;