import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userModels } from "./models/user.model.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
dotenv.config();
app.get("/", (req, res) => {
  res.send("On /");
});

mongoose.connect(process.env.MONGO_URL);

app.post("/api/data", async (req, res) => {
  const { name, email, username, phone, gender, dob, address, skills } =
    req.body;
  try {
    const userInfo = await userModels.create({
      name,
      email,
      username,
      phone,
      gender,
      dob,
      address,
      skills,
    });
    res.json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8000, () => {
  console.log("listening");
});
