const express = require('express');
const app = express();
const workspaceRoutes = require('./routes/workspaceRoute');
const userRoutes = require('./routes/userRoute');
const bookingRoutes = require('./routes/bookingRoute');

// connect to database using mongoose
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

// authentication ***********************
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// const bcrypt = require('bcrypt');
const userData = require('./models/user');

const accessSecret = crypto.randomBytes(64).toString('hex'); // create secret

app.post('/signup', async(req, res) => {
    try
    {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new userData({
            userType: req.body.userType, 
            username: req.body.username, 
            password: req.body.password, 
            email: req.body.email 
        })
        // check if username or email is already registered
        // const existingUser = await userData.findOne({ $or: [{ username }, { email }] });
        // if(existingUser)
        // {
        //     return res.status(400).json({ message: 'Username or email is already registered'});
        // }
        // save to db
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(err)
    {
        res.status(500).send(err.message);
    }
})

app.post('/login', async (req, res) => {
    // get user from db
    // let user = { userType: req.body.userType, username: req.body.username, password: req.body.password, email: req.body.email }
    let user = {
        userType: "owner",
        username: "ow1",
        password: "abcv",
        email: "ow1email"
    }
    try
    {
        // take password from frontend and compare to user from db
        if((req.body.password == user.password))
        {
            // create JWT 
            const userJWT = { userType: user.userType, username: user.username };
            const accessToken = jwt.sign(userJWT, accessSecret);
            res.send({ accessToken: accessToken });
        }
        else
        {
            res.send('Not Allowed');
        }
    }
    catch
    {
        res.status(500).send();
    }
})

// access home page
app.get('/', authenticateToken, (req, res) => {
    res.json(req.user);
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, accessSecret, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}
// add logout
// *********************************************

// use routes
app.use(workspaceRoutes);
app.use(userRoutes);
app.use(bookingRoutes);

app.listen(4236, () => {
    console.log('server is running');
})