import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files from uploads folder
app.use("/uploads", express.static("uploads"));

app.use(cors({
  origin: "http://localhost:5173", // or "*" for all origins
  credentials: true, // if using cookies or auth headers
}));

app.use(users);

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
