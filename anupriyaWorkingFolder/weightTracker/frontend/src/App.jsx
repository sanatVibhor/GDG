import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeightForm from '../components/WeightForm';
import WeightChart from '../components/WeightChart'; // ✅ Import the main CSS for styling
 // ✅ Import the main CSS for styling
function App() {
  const [weights, setWeights] = useState([]);
  const fetchWeights = async () => {
    const res = await axios.get('http://localhost:5000/weights');
    const data = res.data.map(entry => ({
      ...entry,
      date: new Date(entry.date).toLocaleDateString()
    }));
    setWeights(data);
  };
  useEffect(() => {
    fetchWeights();
  }, []);
   const addNewEntry = async (entry) => {
    try {
      await axios.post('http://localhost:5000/weights', entry);
      fetchWeights(); // Refresh chart after adding
    } catch (err) {
      console.error('Error adding new weight entry:', err);
    }
  };
  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h2>Weight Tracker</h2>
      <WeightForm onNewEntry={addNewEntry} />
      <h2>Weight Chart</h2>
      <WeightChart data={weights} />
    </div>
  );
}
export default App;