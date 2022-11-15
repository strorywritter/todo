import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
  taskName:{ type: String, required: true, index: { unique: true } },
  description:{ type: String, required: true },
  status:{ type: String, required: true },
  createdAt:Date,
  updatedAt:Date,
  file: String
})

export default mongoose.model("todo",todoSchema)
