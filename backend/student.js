const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: 'Sanath', course: 'Node.js' },
  { id: 2, name: 'Vibhor', course: 'React' },
  { id: 3, name: 'Aryan', course: 'MongoDB' },
];

// Get all students
app.get('/students', (req, res) => {
  res.json(students);
});

// Add a new student
app.post('/students', (req, res) => {
  const { name, course } = req.body;
  const newStudent = { id: students.length + 1, name, course };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
