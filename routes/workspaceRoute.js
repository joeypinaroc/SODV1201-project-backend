const express = require('express');
const routerW = express.Router();
const {getAllWorkspaces, createOneWorkspace, editOneWorkspace, deleteOneWorkspace} = require('../controllers/workspaceController');

routerW.get('/workspace', getAllWorkspaces);
routerW.post('/workspace', createOneWorkspace);
routerW.put('/workspace/:id', editOneWorkspace);
routerW.delete('/workspace/:id', deleteOneWorkspace);

module.exports = routerW;