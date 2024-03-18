import userSchema, { UserDocument } from "./userSchema";

export const insertUser = (
  userObj: Record<string, any>
): Promise<UserDocument> => {
  const newUser = new userSchema(userObj);
  return newUser.save();
};

export const getUserByEmail = (email: string) => {
  return userSchema.findOne({ email });
};

export const getUserById = (_id: string) => {
  return userSchema.findOne({ _id });
};
