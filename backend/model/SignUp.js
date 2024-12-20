const mongoose = require("mongoose")

const Signup = new mongoose.Schema({
  name:{
    type:String
  },
   email:{
    type: String
   },
   password:{
    type: String
   },
});

const signup = mongoose.model("signupdata",Signup)
module.exports = signup