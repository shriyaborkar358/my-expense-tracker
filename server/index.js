import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { postSignup, postLogin } from "./controllers/user.js";
import { postTransaction } from "./controllers/transaction.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL);

  if (conn) {
    console.log("MongoDB connected succesfully ✔️");
  }
};
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my expense tracker",
  });
});

app.post("/signup", postSignup);

app.post("/login", postLogin);

app.post("/transaction", postTransaction);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
