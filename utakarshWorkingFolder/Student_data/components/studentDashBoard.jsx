// src/components/StudentDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './studentDashboard.css'; // Assuming you have a CSS file for styling

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [gpa, setGpa] = useState(0);

  const API_URL = 'http://localhost:3000/students';

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL, { params: { name, course, gpa } });
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
      await axios.post(API_URL, { name, course, gpa });
      setName('');
      setCourse('');
      setGpa(0);
      alert('Student added successfully!');
      fetchStudents();
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: '20px',gap: '50px', backgroundColor: '#F0F0F0' }}>
    <h1 style={{ color: '#000000' }}>Student Dashboard</h1>

    {/* Flex container to align child divs horizontally */}
    <div style={{ display: 'flex', gap: '300px' }}>
      {/* Left: Student List */}
      <div style={{marginLeft: '30px'}}>
        <h2 style={{ color: '#9929EA'}}>Student List</h2>
        <table>
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Course</th>
              <th style={cellStyle}>GPA</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td style={cellStyle}>{s.name}</td>
                <td style={cellStyle}>{s.course}</td>
                <td style={cellStyle}>{s.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right: Add New Student */}
      <div>
      <div className="student-card">
      <h2 className="form-title">Add New Student</h2>
        <label className="form-label">Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />

        <label className="form-label">Course:</label>
        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="form-input"
        />

        <label className="form-label">GPA:</label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter GPA"
          value={gpa}
          onChange={(e) => setGpa(parseFloat(e.target.value))}
          className="form-input"
        />

        <button onClick={addStudent} className="form-button">
          Add Student
        </button>
      </div>
    </div>
  </div>
  </div>
  );
}
const cellStyle = {
  border: '1px solid black',
  padding: '8px',
  textAlign: 'left'
};

export default StudentDashboard;
