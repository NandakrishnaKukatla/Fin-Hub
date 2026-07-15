import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

// Load environment variables early
dotenv.config();

/**
 * Perform pre-start checks, connect to the database, and spin up the Express server.
 */
const startServer = async () => {
  try {
    // Initialize Database & validate critical config variables
    await connectDB();

    const PORT = process.env.PORT || 5000;

    // Launch HTTP Server
    app.listen(PORT, () => {
      console.log(
        `🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`
      );
    });
  } catch (err) {
    console.error(`💥 Critical failure during server bootstrap: ${err.message}`);
    process.exit(1);
  }
};

startServer();
