const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');

const incidentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  severity: {
    type: String,
    required: [true, 'Severity is required'],
    enum: {
      values: ['Low', 'Medium', 'High'],
      message: 'Severity must be Low, Medium, or High'
    }
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

incidentSchema.index({ title: 'text', description: 'text' });

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;