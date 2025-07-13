const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: 'Ruchi', course: 'Node.js', HomeTown: 'Ranchi', MobNo: 'XXXXXXXXXX', Address: 'xydby uf  cyfu b', class: 'A' },
  { id: 2, name: 'Utkarsh', course: 'React', HomeTown: 'Ranchi', MobNo: 'XXXXXXXXXX', Address: 'xydby uf  cyfu b', class: 'B' },
  { id: 3, name: 'Shivani', course: 'MongoDB', HomeTown: 'Ranchi', MobNo: 'XXXXXXXXXX', Address: 'xydby uf  cyfu b', class: 'B' },
];

let Teachers = [
  { id: 1, name: 'Sanat', course: 'Node.js', class: 'B' },
  { id: 2, name: 'payal', course: 'Frontend', class: 'A' },
  { id: 3, name: 'Shivani', course: 'MongoDB', class: 'C' },
];

// Get all students
app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/teachers', (req, res) => {
  res.json(Teachers);
});

// Add a new student
// app.post('/students', (req, res) => {
//   const { name, course } = req.body;
//   const newStudent = { id: students.length + 1, name, course };
//   students.push(newStudent);
//   res.status(201).json(newStudent);
// });

// app.get('/teachers',(req,res)=>{

// })

app.listen(PORT, () => {
  console.log('students', students);
  console.log('teachers', Teachers);


  console.log(`Server running at http://localhost:${PORT}`);
});
