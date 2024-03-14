import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();

const PORT = 8000;

//connect database
import connectMongoDB from "./src/config/mongoConfig";
connectMongoDB();

//middlewares
app.use(cors());
app.use(express.json());

//APIs
import userRouter from "./src/routers/userRouter";
import contentRouter from "./src/routers/contentRouter";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Check the relevant router",
  });
});

app.listen(PORT, () => {
  console.log(`server is running in Port: ${PORT}`);
});
