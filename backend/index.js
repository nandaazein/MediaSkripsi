import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import studentRoutes from './Route/SiswaRoute.js';
import teacherRoutes from './Route/GuruRoute.js';
import quizRoutes from './Route/QuizRoute.js';
import kkmRoutes from './Route/KkmRoute.js';

config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/kkm', kkmRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});