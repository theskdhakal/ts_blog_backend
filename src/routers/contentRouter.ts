import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  try {
    console.log(req.body);
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
