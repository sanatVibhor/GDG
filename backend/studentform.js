const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const MONGO_URI = 'mongodb+srv://sanatvibhor05:4XuUk55jABawdUTZ@cluster0.zfhykgm.mongodb.net/GDG?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Ensure 'uploads/' folder exists and is served statically (optional)
app.use('/uploads', express.static('uploads'));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Define schema and model
const formSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  address1: String,
  signPath: String,
  photoPath: String,
});

const FormEntry = mongoose.model('FormEntry', formSchema, 'student_form');

// POST /submit route
app.post('/submit', upload.fields([
  { name: 'sign', maxCount: 1 },
  { name: 'photo', maxCount: 1 },
]), async (req, res) => {
  try {
    const { fullname, email, password, address1 } = req.body;
    const signPath = req.files['sign']?.[0]?.path || '';
    const photoPath = req.files['photo']?.[0]?.path || '';

    if (!fullname || !email || !password || !address1 || !signPath || !photoPath) {
      return res.status(400).json({ error: 'All fields and files are required.' });
    }

    const newEntry = new FormEntry({
      fullname,
      email,
      password,
      address1,
      signPath,
      photoPath
    });

    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error saving form:', err);
    res.status(500).json({ error: 'Server error while saving form.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
