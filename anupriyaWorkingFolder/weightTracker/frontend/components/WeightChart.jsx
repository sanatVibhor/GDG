import React from 'react';
import './WeightChart.css'; // ✅ Import the CSS for styling
 // ✅ Import the CSS for styling
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
// ✅ Import the CSS

const WeightChart = ({ data }) => {
  // Convert date string to readable format
  const formattedData = data.map(entry => ({
    ...entry,
    date: new Date(entry.date).toLocaleDateString()
  }));

  return (
    <div className="chart-container">
      <h2>Weight Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3"  stroke='#000'/>
          <XAxis dataKey="date"/>
          <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#a389ffff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart; 
