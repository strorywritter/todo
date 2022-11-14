import express from 'express'
import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/db.js";

await connectDB();

// user functions
// import signup from './functions/user/signup.js'
import addTodo from './functions/user/addTodo.js'
import updateTodo from './functions/user/updateTodo.js'
import getTodo from './functions/user/getTodo.js'


const app = express()
const PORT = 3000

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
app.use('/user',addTodo)

// updateTodo
app.use('/user',updateTodo)

// getTodo
app.use('/user',getTodo)


app.get('/',(req,res)=>{
    console.log("main page")
    res.send('main page')
})
app.listen(PORT, ()=> console.log(`Server running on port: http://localhost ${PORT}`))