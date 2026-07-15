import mongoose from 'mongoose';

/**
 * Validate environment variables and connect to MongoDB.
 * Throws an error if required configuration is missing.
 */
const connectDB = async () => {
  const requiredEnv = ['MONGO_URI', 'JWT_SECRET', 'PORT'];
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    throw new Error(
      `CRITICAL CONFIGURATION ERROR: Missing required environment variables: ${missingEnv.join(', ')}`
    );
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Connected to MongoDB: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(`❌ MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
