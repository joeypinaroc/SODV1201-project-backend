const mongoose = require('mongoose');
// connection string from MongoDB A
const MongoDB_URI = 'mongodb+srv://jpinaroc968:E4KI6K9rjUz8BmFk@cluster0.sgbga41.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectToMongoDB() {
    try {
        await mongoose.connect(MongoDB_URI);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = connectToMongoDB;