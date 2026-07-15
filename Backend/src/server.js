import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();


const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

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
