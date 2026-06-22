import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  Users: Number,
  Revenue: Number,
  Sessions: Number,
  BounceRate: Number
});

export default mongoose.model("Analytics", analyticsSchema);
