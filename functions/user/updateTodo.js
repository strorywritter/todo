import express from "express";
import "dotenv/config";
const router = express.Router();
import date from "date-and-time";
import addTodoModel from "../../models/addTodoModel.js";

const now = new Date();
const dateTime = date.format(now, "ddd, MMM DD YYYY");

router.post("/updateTodo", async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData)
    if (!bodyData.status || !bodyData.todoId) {
      return res.status(422).json({
        status: "status is required",
        todoId: "todoId is required",
      });
    }
    const updateData = await addTodoModel.findByIdAndUpdate(
      bodyData.todoId,
      {
        status: bodyData.status,
        updatedAt: dateTime,
      },
    );
    res.send(updateData);
  } catch (err) {
    res.send(err);
  }
});
export default router;
