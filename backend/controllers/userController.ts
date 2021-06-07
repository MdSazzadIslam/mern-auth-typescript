import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import {
  register,
  checkEmailExist,
  checkUserExist,
} from "../services/userService";
import generateToken from "../middlewares/generateToken";
import bcrypt from "bcrypt";

dotenv.config({ path: "../.env" });

const registration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res
        .status(401)
        .send({ success: false, msg: "Please fillup required field." });
    } else if (password.length < 8) {
      return res.status(401).send({
        success: false,
        msg: "Password must be at least 8 characters.",
      });
    } else {
      const userExists = await checkEmailExist(email);
      console.log(userExists);
      if (userExists) {
        return res
          .status(409)
          .send({ success: false, msg: "Email already exists" });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = {
        firstName,
        lastName,
        email,
        password: passwordHash,
      };

      const user = await register(newUser);

      if (user) {
        res.status(200).send({
          success: true,
          msg: "Registration Success",
        });
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "Registration fail" });
      }
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, msg: "Registration is not successfull." });
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.json({
        success: false,
        msg: "Please enter email and password.",
      });
    } else {
      try {
        const user = await checkUserExist(req.body);
        if (user === undefined || user === null) {
          return res
            .status(401)
            .send({ success: false, msg: "User not found" });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (passwordIsValid === false)
          return res.json({
            success: false,
            msg: "Password is invalid!!!",
          });
        if (!passwordIsValid)
          return res.status(401).send({
            msg: "Password is not valid.",
            success: false,
            token: null,
          });

        //creating a token
        var token = await generateToken(user._id);

        if (user) {
          res.json({
            success: true,
            msg: "Successfull",
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            activeStatus: user.activeStatus,
            role: user.role,
            token: token,
          });

          //res.cookie("token", token, { maxAge: 900000, httpOnly: true });
        } else {
          return res
            .status(401)
            .send({ success: false, msg: "Please check all the data" });
        }
      } catch (err) {
        return res.status(500).json({ success: false, msg: err.message });
      }
    }
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

export { registration, login };
