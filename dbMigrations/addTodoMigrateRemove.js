import mongoose from "mongoose";
import "dotenv/config";
import addTodoModel from "../models/addTodoModel.js";

// const URI = process.env.MONGODB_URI;

mongoose.connect("mongodb+srv://nadeesha:12345@cluster0.hfw6xgw.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
(async () => {
    console.log('sdsdsd')
  const migration = await addTodoModel.updateMany({}, {$unset:{"description":1}});
  console.log(migration)
  mongoose.disconnect()
})();
