import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  biodata: { type: String, required: true },
  jobRole: { type: String, required: true },
  image: { type: String }, // Optional image URL field
});

const User = mongoose.model("User", userSchema);

export default User;




