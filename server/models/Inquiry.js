const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
    default: '',
  },
  message: {
    type: String,
    trim: true,
    default: '',
  },
  type: {
    type: String,
    enum: ['notify', 'inquiry'],
    default: 'notify',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Inquiry', inquirySchema);
