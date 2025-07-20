// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Fake student data
const students = [
  { id: 1, name: 'Sanat', course: 'Node.js' },
  { id: 2, name: 'Vibhor', course: 'React' },
  { id: 3, name: 'Aryan', course: 'MongoDB' },

];
//ADD hometown, phone number, address.
// API endpoint to get all students
app.get('/students', (req, res) => {
  res.json(students); //converts to json
});

// Start server
app.listen(PORT, () => {
  console.log("students",students)
  console.log(`Server running at http://localhost:${PORT}`);
});

