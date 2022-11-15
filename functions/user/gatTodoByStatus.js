import express from "express";
import "dotenv/config";
const router = express.Router();
import addTodoModel from "../../models/addTodoModel.js";

router.get("/getTodoByStatus", async (req, res) => {
  try {
    const status = req.query.status;
    const allTodos = await addTodoModel.find({status:status});
    res.send(allTodos);
  } catch (err) {
    res.send(err);
  }
});
export default router;
