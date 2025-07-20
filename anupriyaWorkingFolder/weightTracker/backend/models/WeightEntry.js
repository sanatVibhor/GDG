const mongoose = require('mongoose');

const weightEntrySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('WeightEntry', weightEntrySchema);
