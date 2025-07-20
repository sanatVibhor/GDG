const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB Atlas connection string (direct)
const MONGO_URI = "mongodb+srv://utakarsh15904:eO05FCmL9eKFrPnJ@utakarshcluster.vbwdt94.mongodb.net/?retryWrites=true&w=majority&appName=UtakarshCluster";

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define schema and model
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  gpa:Number
});

const Student = mongoose.model('Student', studentSchema, 'gdg_student'); // exact collection name

// GET all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching students' });
  }
});

// POST new student
app.post('/students', async (req, res) => {
  const { name, course, gpa } = req.body;
   console.log('Received:', { name, course, gpa });
  if (!name || !course) {
    return res.status(400).json({ error: 'Name and course are required urgently' });
  }

  try {
    const newStudent = new Student({ name, course, gpa });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Error saving student' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
