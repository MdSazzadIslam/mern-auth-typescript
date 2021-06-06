import express from "express";
import { Application } from "express";
import connectDB from "./config/db";
import cors from "cors";
import logger from "morgan";
import * as path from "path";
import * as fs from "fs";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const main = async () => {
  await connectDB();

  const app: Application = express();
  app.use(express.json());
  //app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  //Bodyparser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
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
  //Serves all the request which includes /images in the url from Images folder
  app.use("/images", express.static(__dirname + "/images"));

  app.get("/", (req, res) => {
    res.send("API is running");
  });

  app.use("/api/user", userRoute);
  app.listen(process.env.PORT, () => {
    console.log(
      "Server is running at http://localhost:%s in %s mode",
      process.env.PORT,
      process.env.NODE_ENV
    );
  });
};

main().catch((err) => {
  console.log(err);
});
