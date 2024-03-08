import express from "express";

const app = express();

const PORT = 8000;

//APIs
import userRouter from "./src/routers/userRouter";

app.use("/api/v1/user", userRouter);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Check the relevant router",
  });
});

app.listen(PORT, () => {
  console.log(`server is running in Port: ${PORT}`);
});
