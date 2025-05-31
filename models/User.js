// import mongoose from "mongoose"; 
// const userSchema = new mongoose. Schema 
// ({ 
// username: { type: String, required: true, unique: true },
// password: { type: String, required: true }, 
// biodata: { type: String, required: true }, 
// jobRole: { type: String, required: true }, 
// }); 

// const User = mongoose.model("User", userSchema); 

// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  biodata: { type: String, required: true },
  jobRole: { type: String, required: true },
  imagePath: { type: String }, // new field for image URL
});

const User = mongoose.model("User", userSchema);
export default User;
