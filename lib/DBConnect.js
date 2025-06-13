import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

export const DBConnect = async () => {
  if (!DB_URI) throw new Error("DB_URI is missing from environment variables");

  const readyState = mongoose.connection.readyState;
  if (readyState === 1) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(DB_URI, {
      dbName: "NextjsTodoApp",
    });
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
