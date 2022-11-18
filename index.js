import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";
import multer from "multer"
import cloudinary from "cloudinary"
import middleware from './middleware/auth.js'

const app = express()
const PORT = 4000

app.use(cors())

app.use(middleware.decodeToken)

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

// user functions
// import signup from './functions/user/signup.js'
import addTodo from './functions/user/addTodo.js'
import updateTodo from './functions/user/updateTodo.js'
import getTodoByDate from './functions/user/getTodoByDate.js'
import getTodoByStatus from './functions/user/getTodoByStatus.js'
import getTodo from './functions/user/getTodo.js'


app.use(bodyParser.json())

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


app.get('/users',(req,res)=>{
    console.log("main page")
    res.send('main page')
})
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost ${PORT}`))