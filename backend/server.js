import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample home route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Aari Aaradhya Studio API is functional'
  });
});

// Start listener
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
