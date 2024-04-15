const mongoose = require("mongoose");
const db = require('../db');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    phoneno:{
        type :Number,
        required :true
    },
    city :{
        type:String,
        required:true
    }
});
const userModel = mongoose.model('signup', userSchema);

module.exports = userModel;
