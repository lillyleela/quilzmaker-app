const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use environment variable for MongoDB URI, fallback to localhost for local dev
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/quizmaker";

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit app if DB connection fails
  }
};

module.exports = connectDB;
