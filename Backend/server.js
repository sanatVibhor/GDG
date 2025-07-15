// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Fake student data with additional fields
const students = [
  {
    id: 1,name: 'Sanat',course: 'Node.js',hometown: 'Delhi',phone: '9876543210',address: 'xyz road, Delhi',class: 'sem1'
  },
  {
    id: 2,name: 'Vibhor',course: 'React', hometown: 'Mumbai', phone: '8765432109',address: 'lol road, Mumbai',class: 'sem2'
  },
  {
    id: 3,name: 'Aryan',course: 'MongoDB',hometown: 'Bangalore',phone: '7654321098',address: 'abcd road, Bangalore', class: 'sem3'
  }
];

const teachers = [
  {
    id: 1, name: 'aknit', subject: 'Mathematics', experience: '5 years',class: 'sem1'
  },
  {
    id: 2, name: 'jon', subject: 'Science', experience: '3 years',class: 'sem2'
  },
  {
    id: 3, name: 'aditya', subject: 'English', experience: '4 years',class: 'sem3'
  }
];

app.get('/students', (req, res) => {
  res.json(students); 
});

app.get('/teachers', (req, res) => {
  const teachersWithStudents = teachers.map(teacher => {
    const matchingStudents = students.filter(student => student.class === teacher.class);
    return {
      ...teacher,
      students: matchingStudents
    };
  });

  res.json(teachersWithStudents);
});

app.listen(PORT, () => {
  console.log("students", students);
  console.log("teachers", teachers);
  console.log(`Server running at http://localhost:${PORT}`);
});

