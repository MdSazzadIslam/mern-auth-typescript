import * as mongoose from "mongoose";

//creating an interface representing a document in MongoDB
export interface IUser extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profileImage: string;
  phoneNo: string;
  gender: string;
  activeStatus: boolean;
  role: string;
}

//Creating a Schema corresponding to the document interface.
export const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },

    profileImage: {
      type: String,
    },

    phoneNo: {
      type: String,
    },

    gender: {
      type: String,
    },

    activeStatus: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin", "root"],
    },
  },
  { timestamps: true }
);

//const User: Model<IUser> = model("User", UserSchema);
const User = mongoose.model<IUser>("User", UserSchema);
export default User;
