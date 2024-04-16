const express = require('express');
const routerW = express.Router();
const {getAllWorkspaces, getOneWorkspace, createOneWorkspace, editOneWorkspace, deleteOneWorkspace} = require('../controllers/workspaceController');

routerW.get('/workspace', getAllWorkspaces);
routerW.get('/workspace/:id', getOneWorkspace);
routerW.post('/workspace', createOneWorkspace);
routerW.put('/workspace/:id', editOneWorkspace);
routerW.delete('/workspace/:id', deleteOneWorkspace);

module.exports = routerW;