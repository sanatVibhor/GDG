// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Fake student data
const students = [
  { 
    id: 1, 
    name: 'Sanath', 
    course: 'Node.js',
    class: 'A',
    hometown: 'Bangalore',
    phone: '9876543210',
    address: '123 Main St, Bangalore, KA'
  },
  { 
    id: 2, 
    name: 'Vibhor', 
    course: 'React',
    class: 'B',
    hometown: 'Delhi',
    phone: '9123456780',
    address: '456 Park Ave, Delhi, DL'
  },
  { 
    id: 3, 
    name: 'Aryan', 
    course: 'MongoDB',
    class: 'C',
    hometown: 'Mumbai',
    phone: '9988776655',
    address: '789 Lake Rd, Mumbai, MH'
  },
  { 
    id: 4, 
    name: 'Priya', 
    course: 'Node.js',
    class: 'A',
    hometown: 'Chennai',
    phone: '9876501234',
    address: '101 South St, Chennai, TN'
  },
  { 
    id: 5, 
    name: 'Rohan', 
    course: 'React',
    class: 'B',
    hometown: 'Kolkata',
    phone: '9123409876',
    address: '202 East Ave, Kolkata, WB'
  },
  { 
    id: 6, 
    name: 'Sneha', 
    course: 'MongoDB',
    class: 'C',
    hometown: 'Pune',
    phone: '9988701234',
    address: '303 North Rd, Pune, MH'
  },
  { 
    id: 7, 
    name: 'Amit', 
    course: 'Node.js',
    class: 'A',
    hometown: 'Hyderabad',
    phone: '9876512345',
    address: '404 West St, Hyderabad, TS'
  },
  { 
    id: 8, 
    name: 'Meera', 
    course: 'React',
    class: 'B',
    hometown: 'Ahmedabad',
    phone: '9123412345',
    address: '505 Central Ave, Ahmedabad, GJ'
  },
  { 
    id: 9, 
    name: 'Karan', 
    course: 'MongoDB',
    class: 'C',
    hometown: 'Chandigarh',
    phone: '9988712345',
    address: '606 Lake View, Chandigarh, CH'
  }
];

const teachers = [
  { 
    id: 1, 
    name: 'Mr. Sharma', 
    course: 'Node.js', 
    class: 'A',
    hometown: 'Bangalore', 
    phone: '9001122334', 
    address: '12 Teacher Lane, Bangalore, KA' 
  },
  { 
    id: 2, 
    name: 'Ms. Gupta', 
    course: 'React', 
    class: 'B',
    hometown: 'Delhi', 
    phone: '9112233445', 
    address: '34 Faculty Rd, Delhi, DL' 
  },
  { 
    id: 3, 
    name: 'Dr. Mehta', 
    course: 'MongoDB', 
    class: 'C',
    hometown: 'Mumbai', 
    phone: '9223344556', 
    address: '56 Academic Ave, Mumbai, MH' 
  }
];



// API endpoint to get all students
app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/teachers',(req,res)=>{
    res.json(teachers);
})

// Start server
app.listen(PORT, () => {
    console.log("students",students)
    console.log(`Server running at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
    console.log("teachers",teachers)
    console.log(`Server running at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Pairings of teachers and students (based on class):");
  for (let teacher of teachers) {
    console.log(`teacher: ${teacher.name},class: ${teacher.class}`)
    for (let student of students) {
      if (teacher.class === student.class) {
        console.log(`Student: ${student.name}`);
      }
    }
  }
});