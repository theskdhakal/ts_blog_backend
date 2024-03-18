import express from "express";
import {
  addContent,
  deleteContent,
  getAllContent,
  getContentById,
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

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { authorization } = req.headers;

    const userId = authorization;

    console.log(userId);

    const thisContent = await getContentById(_id);

    if (!thisContent) {
      return res.json({ message: "content not found" });
    }

    if (thisContent?.authorId.toString() !== userId) {
      return res.json({ status: "error", message: "unauthorized" });
    }

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
