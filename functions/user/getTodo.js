import express from "express";
import "dotenv/config";
const router = express.Router();
import addTodoModel from "../../models/addTodoModel.js";

router.get("/getTodo", async (req, res) => {
  try {
    const email = req.query.email;
    const allTodos = await addTodoModel.find({email:email});
    res.send(allTodos);
  } catch (err) {
    res.send(err);
  }
});
export default router;
