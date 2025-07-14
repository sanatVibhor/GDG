import React, { useState } from 'react';
import AddWeightForm from './components/AddWeightForm';
import WeightChart from './components/WeightChart';

function App() {
  const [refreshChart, setRefreshChart] = useState(false);

  const handleEntryAdded = () => {
    setRefreshChart(prev => !prev);
  };

  return (
    <div style={{
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: '30px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '0.3rem' }}>⚖️ Weight Tracker</h1>
          <p style={{ color: '#636e72' }}>Track your weight over time and visualize your progress</p>
        </header>

        <AddWeightForm onEntryAdded={handleEntryAdded} />
        <WeightChart key={refreshChart} />
      </div>
    </div>
  );
}

export default App;
