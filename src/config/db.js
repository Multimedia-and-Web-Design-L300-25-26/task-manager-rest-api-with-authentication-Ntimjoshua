import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    if (process.env.NODE_ENV !== "test") {
      console.error("Database connection failed");
      process.exit(1);
    } else {
      console.warn("Database connection failed in test mode, continuing...");
    }
  }
};

export default connectDB;