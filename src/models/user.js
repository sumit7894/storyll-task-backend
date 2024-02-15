const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('User',userSchema);
module.exports = User;