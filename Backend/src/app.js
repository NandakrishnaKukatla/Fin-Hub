import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import { errorHandler, notFound } from './middlewares/error.middleware.js';

// Load environment variables early (in case they haven't been loaded in server.js)
dotenv.config();

const app = express();

// --- SECURITY MIDDLEWARES ---
// Configure Helmet for secure HTTP headers
app.use(helmet());

// Configure CORS
app.use(
  cors({
    origin: '*', // Allow all origins as per original configuration
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// --- BODY PARSING MIDDLEWARES ---
// Parse incoming requests with JSON payloads
app.use(express.json());

// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// --- LOGGING ---
// Use Morgan to log HTTP requests in development format
app.use(morgan('dev'));

// --- RATE LIMITING ---
// Apply rate limiting to prevent Brute-Force/DDoS attacks
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false, // Disable older headers
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
    errors: ['Rate limit exceeded. Max 100 requests per 15 minutes.'],
  },
});
app.use('/api', apiLimiter);

// --- ROUTES ---
// Root health check endpoint
app.get('/', (req, res) => {
  res.send('🚀 Backend is running');
});

// Authentication routes
app.use('/api/auth', authRoutes);

// --- ERROR HANDLING MIDDLEWARES ---
// 404 handler for unmatched routes
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

export default app;
