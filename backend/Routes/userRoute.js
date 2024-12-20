// import signup from "../model/SignUp.js"
const express = require("express")
const path = require('path');
const courseModel = require("../model/CreateCourse")
const multer = require("multer");
const jwt = require("jsonwebtoken")
const SignupModel = require("../model/SignUp")
const route = express.Router()
const jwtkey = "LMS_SECRET_KEY"


route.post("/signup", async (req, res) => {
    const data = new SignupModel(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;

    jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {

        if (result) {
            res.send({ result, auth: token })
        }
        else {
            res.send({ message: "some error please try after sometime" })
        }
    })
});
 
route.post("/login",async(req,res)=>{

        let User = await SignupModel.findOne(req.body).select("-password");
        if (User) {
            jwt.sign({ User }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (User) {
                    res.send({ User, auth: token })
                }
                else {
                    res.send({ message: "some error please try after sometime" })
                }
            })

        } else {
            res.status(404).send('user not found');
        }
   
})


// Configure Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

route.post("/create-course", upload.single("photo"), async(req, res) => {
    try {
      const { name, description, price ,userId} = req.body;
  
      const photo = req.file;
     
      if (!name || !description || !price || !photo || !userId) {
        return res.status(400).send("Please provide all required fields.");
      }

      const newCourse = new courseModel({
        name,
        description,
        price,
        userId,
        photo: photo.filename,
      });
  
      await newCourse.save();
      res.status(201).send("Course created successfully.");
    } catch (error) {
      // Handle errors and send a response
      res.status(500).send("An error occurred while creating the course.");
    }
  });



module.exports = route;