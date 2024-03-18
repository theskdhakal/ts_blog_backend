import mongoose, { Document } from "mongoose";

export interface contentDocument extends Document {
  author: string;
  title: string;
  content: string;
}

const contentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<contentDocument>("content", contentSchema);
