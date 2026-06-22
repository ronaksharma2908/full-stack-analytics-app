import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import analyticsRoutes from "./routes/analytics.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/analytics", analyticsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.listen(5000, () => console.log("Server running on port 5000"));
