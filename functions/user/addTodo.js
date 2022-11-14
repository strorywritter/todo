import express from "express";
import "dotenv/config";
const router = express.Router();
import date from "date-and-time";
import addTodoModel from "../../models/addTodoModel.js";

const now = new Date();
const dateTime = date.format(now, "ddd, MMM DD YYYY");

router.post("/addTodo", async (req, res) => {
  try {
    const bodyData = req.body;
    if (!bodyData.taskName || !bodyData.description) {
      return res.status(422).json({
        taskName: "taskName is required",
        description: "description required",
      });
    }
    const userData = new addTodoModel({
      taskName: bodyData.taskName,
      description: bodyData.description,
      status: "Todo",
      createdAt: dateTime,
      updatedAt: dateTime,
    });
    userData.save();
    res.send(userData);
  } catch (err) {
    res.send(err);
  }
});
export default router;
