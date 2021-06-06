import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const generateToken = async (id: string) => {
  try {
    const jwt_secret_key: string = process.env.JWT_SECRECT_KEY || "";
    return await jwt.sign({ id }, jwt_secret_key, { expiresIn: "1day" });
  } catch (err) {
    console.log(err);
  }
};

export default generateToken;
