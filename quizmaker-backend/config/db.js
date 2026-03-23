const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use Render environment variable if exists; fallback to local DB for dev
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/quizmaker";

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // exit if DB connection fails
  }
};

module.exports = connectDB;
