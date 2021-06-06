import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const jwt_secret_key: string = process.env.JWT_SECRECT_KEY || "";

const activationToken = async (payload: any) => {
  return await jwt.sign(payload, jwt_secret_key, {
    expiresIn: "50m",
  });
};

export default activationToken;
