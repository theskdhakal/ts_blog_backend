import express from "express";
import {
  addContent,
  deleteContent,
  getAllContent,
} from "../model/content/contentModel";
import { auth } from "../middleware/AuthMiddleware";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await addContent(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Your blog has been posted",
      });
    }
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const allContent = await getAllContent();

    return res.json({
      status: "success",
      message: "all blog post has been fetched",
      allContent,
    });
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", auth, async (req, res) => {
  try {
    const { _id } = req.params;

    const deletedContent = await deleteContent(_id);

    deletedContent
      ? res.json({
          status: "success",
          message: "Selected post has been removed ",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the post",
        });
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
