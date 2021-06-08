import express from "express";
import { Application } from "express";
import connectDB from "./config/db";
import cors from "cors";
import logger from "morgan";
import * as path from "path";
import * as fs from "fs";

import userRoute from "./routes/userRoute";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const main = async () => {
  await connectDB();

  const app: Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  //create a write stream(in append mode)
  //morgan only use for developement purpose
  if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
  }

  var accessLogStream = fs.createWriteStream(
    path.join(__dirname, "/logs/access.log"),
    { flags: "a" }
  );
  //setup the logger
  app.use(logger("combined", { stream: accessLogStream }));

  app.get("/", (req, res) => {
    res.send("API is running");
  });

  app.use("/api/user", userRoute);
  app.listen(process.env.PORT, () => {
    console.log(
      `⚡️[server]: running at https://localhost:${process.env.PORT}  ${process.env.NODE_ENV}`
    );
  });
};

main().catch((err) => {
  console.log(err);
});
