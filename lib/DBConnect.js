import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

export const DBConnect = async () => {
  if (!DB_URI) {
    console.log("DB URI Missing");
    return;
  }

  const readyState = mongoose.connection.readyState;
  // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (readyState === 1) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(DB_URI, {
      dbName: "NextjsTodoApp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
