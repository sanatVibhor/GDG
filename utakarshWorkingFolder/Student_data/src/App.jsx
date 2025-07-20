import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from '../components/studentDashBoard.jsx';

const NotFound = () => (
  <div style={{ padding: '20px', color: 'red' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you’re looking for doesn’t exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="*" element={<NotFound />} /> {/* fallback for invalid routes */}
      </Routes>
    </Router>
  );
}

export default App;
