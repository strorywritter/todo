import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
// import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";
import multer from "multer"
import cloudinary from "cloudinary"
// import { auth } from "express-openid-connect"

const app = express()
const PORT = 3000

await connectDB();

cloudinary.config({
  cloud_name: "dt0jpeqrs",
  api_key: "423843764313348",
  api_secret: "wRF-zPuA2dhuZ9VpYxbnYkR6XW8",
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage });

// app.use(
//   auth({
//     // authRequired: false,
//     auth0Logout: true,
//     issuerBaseURL: process.env.ISSUER_BASE_URL,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     secret: process.env.SECRET,
//   })
// );

// user functions
// import signup from './functions/user/signup.js'
import addTodo from './functions/user/addTodo.js'
import updateTodo from './functions/user/updateTodo.js'
import getTodoByDate from './functions/user/getTodoByDate.js'
import getTodoByStatus from './functions/user/gatTodoByStatus.js'
import getTodo from './functions/user/getTodo.js'




app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(bodyParser.json())

// // singup
// app.use('/user',signup)

// addTodo
app.use('/user',upload.single("file"),addTodo)

// updateTodo
app.use('/user',updateTodo)

// getTodoByDate
app.use('/user',getTodoByDate)

// getTodoByStatus
app.use('/user',getTodoByStatus)

// getTodo
app.use('/user',getTodo)


app.get('/',(req,res)=>{
    console.log("main page")
    res.send('main page')
})
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost ${PORT}`))