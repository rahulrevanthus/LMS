const mongoose = require( "mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/LMS").then(()=> console.log("mongodb connected")).catch((error)=> console.log(error))

