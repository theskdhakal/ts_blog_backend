import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.json({
      status: "success",
      message: "New User has been created sucessfully",
    });
  }
});

export default router;
