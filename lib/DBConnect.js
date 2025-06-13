import mongoose from "mongoose";

let DB_URI = process.env.DB_URI;

export const DBConnect = async() => {
  console.log("DBConnect called");
  
  if (!DB_URI) {
    console.error("DB URI Missing - Check environment variables");
    throw new Error("DB URI Missing");
  }
  
  // Check if already connected
  if (mongoose.connection.readyState === 1) {
    console.log("DB already connected");
    return;
  }
  
  // If connecting, wait for it
  if (mongoose.connection.readyState === 2) {
    console.log("DB connection in progress, waiting...");
    await new Promise((resolve) => {
      mongoose.connection.once('connected', resolve);
    });
    return;
  }
  
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("Connection URI (partial):", DB_URI.substring(0, 20) + "...");
    
    // Disconnect any existing connection first
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    
    await mongoose.connect(DB_URI, {
      dbName: 'NextjsTodoApp',
      // Optimized for serverless
      serverSelectionTimeoutMS: 10000, // Increased timeout
      connectTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      maxPoolSize: 1, // Limit connection pool for serverless
      bufferCommands: false, // Disable command buffering
      bufferMaxEntries: 0, // Disable buffer
    });
    
    console.log("DB connected successfully");
    console.log("Connection state:", mongoose.connection.readyState);
    
  } catch (error) {
    console.error("DB connection failed:", error.message);
    console.error("Full error:", error);
    
    // Reset connection state
    if (mongoose.connection.readyState !== 0) {
      try {
        await mongoose.disconnect();
      } catch (disconnectError) {
        console.error("Error disconnecting:", disconnectError.message);
      }
    }
    
    throw error;
  }
}