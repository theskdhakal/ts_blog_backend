import mongoose, { Document } from "mongoose";

export interface UserDocument extends Document {
  fName: string;
  lName: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserDocument>("user", userSchema);
