// src/components/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');

  const API_URL = 'http://localhost:3000/students';

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudents(res.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  // Add new student
  const addStudent = async () => {
    if (!name.trim() || !course.trim()) {
      alert('Please fill in both name and course.');
      return;
    }

    try {
      await axios.post(API_URL, { name, course });
      setName('');
      setCourse('');
      fetchStudents(); // refresh list
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Student Dashboard</h1>

      <h2>Student List</h2>
      <table style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead>
          <tr>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td style={cellStyle}>{s.id}</td>
              <td style={cellStyle}>{s.name}</td>
              <td style={cellStyle}>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: '30px' }}>Add New Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: '5px' }}
      />
      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={{ margin: '5px' }}
      />
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

const cellStyle = {
  padding: '10px',
  border: '1px solid #aaa',
  textAlign: 'left',
};

export default StudentDashboard;
