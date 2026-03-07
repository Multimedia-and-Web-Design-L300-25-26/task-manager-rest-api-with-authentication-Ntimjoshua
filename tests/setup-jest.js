import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// For testing, use a test database or skip connection
const connectDB = async () => {
  if (process.env.NODE_ENV === "test") {
    // Create an in-memory MongoDB instance or skip connection
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/task-manager");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
