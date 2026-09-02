const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// In-memory fallback if MongoDB is not connected
const memoryInquiries = [];

// API Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'MIRAE arc studio API',
    timestamp: new Date().toISOString(),
    dbConnected: require('mongoose').connection.readyState === 1
  });
});

// Submit Notification / Inquiry
router.post('/inquire', async (req, res) => {
  try {
    const { email, name, message, type } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
    }

    const isDbConnected = require('mongoose').connection.readyState === 1;

    if (isDbConnected) {
      const newInquiry = new Inquiry({ email, name, message, type });
      await newInquiry.save();
    } else {
      // Save to memory fallback
      memoryInquiries.push({ email, name, message, type, createdAt: new Date() });
      console.log('[API] Saved to in-memory fallback:', { email, name, message, type });
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you! We have received your request and will reach out soon.',
    });
  } catch (err) {
    console.error('[API Error]:', err);
    return res.status(500).json({ success: false, message: 'Server error processing your request.' });
  }
});

module.exports = router;
