import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const WeightChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/weights')
      .then(res => {
        const sorted = res.data.sort(
          (a, b) => new Date(a.loggedAt) - new Date(b.loggedAt)
        );

        const formatted = sorted.map(entry => ({
          weightKg: entry.weightKg,
          date: new Date(entry.loggedAt).toLocaleDateString()
        }));

        setData(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      height: 400
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>📉 Your Weight Progress</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="weightKg" stroke="#00b894" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;
