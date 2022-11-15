import express from "express";
import "dotenv/config";
const router = express.Router();
import addTodoModel from "../../models/addTodoModel.js";

router.get("/getTodo", async (req, res) => {
  try {
    const allTodos = await addTodoModel.find();
    res.send(allTodos);
  } catch (err) {
    res.send(err);
  }
});
export default router;
