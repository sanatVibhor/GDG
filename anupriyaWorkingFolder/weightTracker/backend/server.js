const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Replace with your actual MongoDB Atlas URI
const MONGO_URI = 'mongodb+srv://anupriya20041:9miBca9cuyDDsh54@anupriyacluster.zwtqgft.mongodb.net/anupriyadb?retryWrites=true&w=majority&appName=anupriyaCluster';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const WeightEntry = require('./models/WeightEntry');

app.get('/weights', async (req, res) => {
  const entries = await WeightEntry.find().sort({ date: 1 });
  res.json(entries);
});

app.post('/weights', async (req, res) => {
  const { date, weight } = req.body;
  const entry = new WeightEntry({ date, weight });
  await entry.save();
  res.json(entry);
});

// Connect to MongoDB and start the server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
