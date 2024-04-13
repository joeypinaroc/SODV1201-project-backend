const express = require('express');
const app = express();
const workspaceRoutes = require('./routes/workspaceRoute');
const userRoutes = require('./routes/userRoute');
const connectToMongoDB = require('./connectDB');

connectToMongoDB();

app.use((req, res, next) => {
    // CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// convert form data to javascript object and put into req body
app.use(express.urlencoded({extended: false}));

// convert json to javascript object and put into request body
app.use(express.json());

// use routes
app.use(workspaceRoutes);
app.use(userRoutes);


app.listen(4236, () => {
    console.log('server is running');
})