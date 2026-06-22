import mongoose from "mongoose";
import dotenv from "dotenv";
import Analytics from "./models/Analytics.js";

dotenv.config();

const seedData = [
  {
    date: new Date("2026-06-22T19:20:58.547Z"),
    Users: 120,
    Revenue: 5000,
    Sessions: 300,
    BounceRate: 45
  },
  {
    date: new Date("2026-06-23T10:00:00.000Z"),
    Users: 150,
    Revenue: 6200,
    Sessions: 400,
    BounceRate: 40
  },
  {
    date: new Date("2026-06-23T12:00:00.000Z"),
    Users: 180,
    Revenue: 7000,
    Sessions: 500,
    BounceRate: 38
  },
  {
    date: new Date("2026-06-23T14:00:00.000Z"),
    Users: 200,
    Revenue: 7500,
    Sessions: 550,
    BounceRate: 35
  },
  {
    date: new Date("2026-06-23T16:00:00.000Z"),
    Users: 220,
    Revenue: 8000,
    Sessions: 600,
    BounceRate: 33
  },
  {
    date: new Date("2026-06-23T18:00:00.000Z"),
    Users: 250,
    Revenue: 8500,
    Sessions: 650,
    BounceRate: 30
  },
  {
    date: new Date("2026-06-23T20:00:00.000Z"),
    Users: 280,
    Revenue: 9000,
    Sessions: 700,
    BounceRate: 28
  },
  {
    date: new Date("2026-06-23T22:00:00.000Z"),
    Users: 300,
    Revenue: 9500,
    Sessions: 750,
    BounceRate: 25
  },
  {
    date: new Date("2026-06-24T00:00:00.000Z"),
    Users: 320,
    Revenue: 10000,
    Sessions: 800,
    BounceRate: 23
  },
  {
    date: new Date("2026-06-24T02:00:00.000Z"),
    Users: 350,
    Revenue: 11000,
    Sessions: 850,
    BounceRate: 20
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    await Analytics.deleteMany({});
    console.log("Old data cleared");

    await Analytics.insertMany(seedData);
    console.log("New seed data inserted");

    mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error(err);
  }
}

seedDB();
