const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URI || 'mongodb+srv://testuser:testuser123@notesdb.klvx0fk.mongodb.net/?retryWrites=true&w=majority&appName=notesdb');
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Connection failed:", error.message);
    }
};

module.exports = connectDB;

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;


const jwt = require('jsonwebtoken');


const token = jwt.sign({ userId: user._id }, accessTokenSecret, { expiresIn: '1h' });


jwt.verify(token, accessTokenSecret, (err, decoded) => {
  if (err) {
    
  } else {
   
  }
});
