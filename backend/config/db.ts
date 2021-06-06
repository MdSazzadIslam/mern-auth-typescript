import * as dotenv from "dotenv";
import { ConnectionOptions, connect } from "mongoose";
dotenv.config({ path: "../.env" });

const connectDB = async () => {
  try {
    const mongo_uri: string = process.env.MONGO_URI || "";
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongo_uri, options);
    console.log("Database connection successfull");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
