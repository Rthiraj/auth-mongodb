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
  image: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
