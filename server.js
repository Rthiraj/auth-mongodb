// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import users from "./routes/users.js";

// dotenv.config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use(express.urlencoded({ extended: true }));
// app.use(users);

// const uri = process.env.MONGODB_URI;

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error", err);
//   });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import users from "./routes/users.js";
// import multer from 'multer';

// dotenv.config();
// const multer = require('multer')

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(users);

// const storage = multer.MulterError;multer.diskStorage({
//   destination: function(req, file, cb){
//     return cb(null, ".public/Images")
//   },
//   filename: function(req, file, cb){
//     return cb(null, `${Date.now()}_${file.originalname}`)
//   }
// })

// const upload=multer({storage})
// app.post('/upload', upload.single('file'), (req, res)=>{
//   console.log(req.body)
//   console.log(req.file)
// })

// const uri = process.env.MONGODB_URI;

// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("MongoDB connection error", err);
//   });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`server running on http://localhost:${PORT}`);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer"; // ✅ Use ES module style
import users from "./routes/users.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(users);

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/Images'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

// ✅ File upload route
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.status(200).json({ message: "File uploaded", file: req.file });
});

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
