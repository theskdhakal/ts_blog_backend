import { getUserById } from "../model/user/userModel";
import { Request, Response, NextFunction } from "express";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //every request have userId
    const { authorization } = req.headers;

    //get the user from db

    if (!authorization) {
      return res.json({
        status: "error",
        message: "unauthorized:Missing Authorised Header",
      });
    }
    const user = await getUserById(authorization);
    console.log(user);

    if (user?._id) {
      return next();
    }

    res.json({
      status: "error",
      message: "!! You do not have permission to this api",
    });
  } catch (error: any) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
};
