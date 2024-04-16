const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');

const app = express();
env.config();



// Middleware
app.use(bodyParser.json());
app.use(cors());



// Database connection
mongoose.connect(process.env.MONGODBURL, {
    serverSelectionTimeoutMS: 5000
});
console.log(`MongoDB connected at ${process.env.MONGODBURL}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});
const User = mongoose.model('User', UserSchema);
app.use(cors({
  origin: 'http://localhost:5173',
}));




// Routes
app.post('/login', async (req, res) => {
  try{
    const {username,password}=req.body;
  const user=await User.findOne({username});

  if(!user){
    return res.status(404).json({success: false, message:"user not found"});
  }

  if(user.password!==password){
    return res.status(404).json({success:false, message:"Invalid password"});
  }

  return res.json({success: true, message:"successfully logged in"});
  
  }catch(error){
    console.log(error);
    return res.status(500).json({success:false , message:"internal server error"});
  }
});


app.post('/signin', async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
   
    const newUser = new User({ name, username, email, password });
    await newUser.save();
    res.json({ success: true, message: 'Successfully signed in' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 