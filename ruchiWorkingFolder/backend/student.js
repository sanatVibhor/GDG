// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// let students = [
//   { id: 1, name: 'Sanath', course: 'Node.js' },
//   { id: 2, name: 'Vibhor', course: 'React' },
//   { id: 3, name: 'Aryan', course: 'MongoDB' },
// ];

// // Get all students
// app.get('/students', (req, res) => {
//   res.json(students);
// });

// // Add a new student
// app.post('/students', (req, res) => {
//   const { name, course } = req.body;
//   const newStudent = { id: students.length + 1, name, course };
//   students.push(newStudent);
//   res.status(201).json(newStudent);
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB Atlas connection string (direct)
const MONGO_URI = 'mongodb+srv://sanatvibhor05:4XuUk55jABawdUTZ@cluster0.zfhykgm.mongodb.net/GDG?retryWrites=true&w=majority';

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
  course: String
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
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ error: 'Name and course are required urgebtluy' });
  }

  try {
    const newStudent = new Student({ name, course });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: 'Error saving student' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
