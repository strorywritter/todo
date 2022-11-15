import express from "express";
import "dotenv/config";
import firebaseAuth from '../../config/firebaseAuth.js'
const router = express.Router();

router.post("/signup", async (req, res) => {
  const bodyData = req.body;
  if (!bodyData['email'] || !bodyData['password']){
    return res.status(422).json({
      email:"email is required",
      password: "password required"
    })
  }

  const token = jwt.sign(
    { user_id: user._id, email },
    process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  // save user token
  user.token = token;
});
export default router;
