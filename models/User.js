  
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

// fire function after doc saved to db
 userSchema.post('save',(doc,next)=>{
   console.log('new user was created and saved',doc);
   next();
  });

  //fire function before doc saved to db

  userSchema.pre('save',(next)=>{
    console.log('user about to created save',this)
    next();
  })
const User = mongoose.model('user', userSchema);

module.exports = User;