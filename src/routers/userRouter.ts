import express from "express";
import { getUserByEmail, insertUser } from "../model/user/userModel";
import { comparePassword, hashPassword } from "../utils/bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { password } = req.body;

    req.body.password = hashPassword(password);

    const result = await insertUser(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "new user has been added successfully",
      });
    }
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //find if user with email is registered

    const user = await getUserByEmail(email);

    if (!user) {
      return res.json({
        status: "error",

        message: "user not found",
      });
    }

    // check if pwd is correct

    const isMatch = comparePassword(password, user.password);

    if (isMatch) {
      const userwithoutPwd = { ...user.toObject(), password: undefined };
      return res.json({
        status: "success",
        message: "logged in successfully",
        user: userwithoutPwd,
      });
    }
    res.json({
      status: "error",
      message: "Invalid Credentials",
    });
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
