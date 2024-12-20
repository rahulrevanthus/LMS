const express  = require("express")
const cors  = require("cors")
const bodyparser  = require("body-parser")
require("./connection/connection")
const userRoute = require( "./Routes/userRoute")
const app = express()
const path = require('path');
const courseRoute = require("./Routes/courseRoute")
const reviewRoutes = require("./Routes/reviewRoute")
app.use(express.json())
app.use(cors())
app.use(bodyparser.json())
const port = 5000;

app.use("/",userRoute)
app.use("/",courseRoute)
app.use("/",reviewRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port,()=> console.log("server started"))