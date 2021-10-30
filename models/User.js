  
const mongoose = require('mongoose');
const {isEmail}=require('validator');



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true,'please enter an email'],
    unique: true,
    lowercase: true,
    validate:[isEmail,'please enter a valid email']
  },
  password: {
    type: String,
    required: [true,'please enter a password'],
    minlength: [6,'minimun password length is 6 characters']
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;