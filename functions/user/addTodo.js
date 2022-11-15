import cloudinary from "cloudinary";
import date from "date-and-time";
import "dotenv/config";
import express from "express";
import addTodoModel from "../../models/addTodoModel.js";
const router = express.Router();

cloudinary.config({
  cloud_name: "dqg1ebndn",
  api_key: "153659478473497",
  api_secret: "w-tHeEp5tD7a2356ASJ-4nahNkQ",
});

const now =new Date();
const dateTime = date.format(now, "ddd, MMM DD YYYY");

router.post("/addTodo", async (req, res) => {
  try {
    const { taskName, description } = req.body;
    if (!taskName || !description) {
      return res.status(422).json({
        taskName: "taskName is required",
        description: "description required",
      });
    }
    const upload = await cloudinary.v2.uploader.upload(req.file.path,{ resource_type: "raw" });
    
    const userData = new addTodoModel({
      taskName: taskName,
      description: description,
      status: "Todo",
      createdAt: dateTime,
      updatedAt: dateTime,
      file: upload.secure_url
    });
    await userData.save();
    res.send(userData);
  } catch (err) {
    res.send(err);
  }
});
export default router;
