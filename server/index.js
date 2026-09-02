const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/miraearc';

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully.'))
  .catch((err) => {
    console.warn('⚠️  MongoDB connection warning:', err.message);
    console.warn('ℹ️  Running in standalone mode with in-memory store for inquiries.');
  });

// API Routes
app.use('/api', require('./routes/api'));

// Serve static frontend build files in production
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({ error: 'API route not found' });
  res.sendFile(path.join(clientDistPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('MIRAE arc studio API Server is running.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 MIRAE arc studio MERN Server running on http://localhost:${PORT}`);
});
