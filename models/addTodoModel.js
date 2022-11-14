import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  taskName:String,
  description:String,
  status:String,
  createdAt:Date,
  updatedAt:Date
})

export default mongoose.model("todo",todoSchema)
