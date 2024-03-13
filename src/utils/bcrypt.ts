import bcrypt from "bcryptjs";

const salt = 10;

export const hashPassword = (plainPassword: string) => {
  return bcrypt.hashSync(plainPassword, salt);
};

export const comparePassword = (plainPassword: string, hashPass: string) => {
  return bcrypt.compareSync(plainPassword, hashPass);
};
