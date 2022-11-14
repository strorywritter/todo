import express from "express";
import "dotenv/config";
const router = express.Router();
import addTodoModel from "../../models/addTodoModel.js";

router.post("/getTodo", async (req, res) => {
  try {
    const bodyData = req.body;
    if (!bodyData.startDate || !bodyData.endDate) {
      return res.status(422).json({
        startDate: "startDate is required",
        endDate: "endDate is required",
      });
    }
    const updateData = await addTodoModel.find({
        $gte: (bodyData.startDate),
        $lt: (bodyData.endDate)
    });
    res.send(updateData);
  } catch (err) {
    res.send(err);
  }
});
export default router;
