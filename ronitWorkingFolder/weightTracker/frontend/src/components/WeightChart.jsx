import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const WeightChart = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/api/weights')
      .then(res => {
        const sorted = res.data.sort(
          (a, b) => new Date(a.loggedAt) - new Date(b.loggedAt)
        );

        const formatted = sorted.map(entry => {
          const dateObj = new Date(entry.loggedAt);
          return {
            weightKg: entry.weightKg,
            date: dateObj.toLocaleDateString(),
            time: dateObj.toLocaleTimeString(),
            note: entry.note || '',
            label: `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`
          };
        });

        setData(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  const filteredData = visibleCount === 'all' ? data : data.slice(-parseInt(visibleCount));

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '40px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📉 Your Weight Progress</h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Show entries:</label>
        <select
          value={visibleCount}
          onChange={(e) => setVisibleCount(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '5px' }}
        >
          <option value="all">All</option>
          <option value="5">Last 5</option>
          <option value="10">Last 10</option>
          <option value="20">Last 20</option>
        </select>
      </div>

      {filteredData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="label" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip
              formatter={(value) => [`${value} kg`, "Weight"]}
              labelFormatter={(label) => label}
            />
            <Line
              type="monotone"
              dataKey="weightKg"
              stroke="#00b894"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>No data yet.</p>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '10px' }}>📋 History</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.95rem'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Weight (kg)</th>
              <th style={thStyle}>Note</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, index) => (
              <tr key={index} style={{ textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
                <td style={tdStyle}>{entry.date}</td>
                <td style={tdStyle}>{entry.time}</td>
                <td style={tdStyle}>{entry.weightKg}</td>
                <td style={tdStyle}>{entry.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '8px',
  borderBottom: '2px solid #ddd',
  color: '#2d3436'
};

const tdStyle = {
  padding: '8px',
  color: '#2d3436'
};

export default WeightChart;
