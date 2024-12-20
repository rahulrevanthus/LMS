const mongoose = require("mongoose")

const course = new mongoose.Schema({
    name:{
        type:String
    } ,
    userId:{
     type : String
    },
    description:{
        type: String
    } , 
    price :{
        type: String
    },
    photo:{
        type:String
    }
})

const courseModel = mongoose.model("createcourse",course)
module.exports = courseModel