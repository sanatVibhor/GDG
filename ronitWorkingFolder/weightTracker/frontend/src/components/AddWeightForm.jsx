import React, { useState } from 'react';
import axios from 'axios';

const AddWeightForm = ({ onEntryAdded }) => {
  const [weightKg, setWeightKg] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weightKg) return alert("Please enter your weight");

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/weights', {
        weightKg: parseFloat(weightKg),
        note,
      });

      setWeightKg('');
      setNote('');
      if (onEntryAdded) onEntryAdded();
    } catch (err) {
      console.error(err);
      alert("Failed to add entry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>➕ Add New Weight</h3>

      <label style={{ display: 'block', marginBottom: '6px' }}>Weight (kg):</label>
      <input
        type="number"
        step="0.1"
        value={weightKg}
        onChange={(e) => setWeightKg(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          color: '#2d3436'
        }}
        required
      />

      <label style={{ display: 'block', marginBottom: '6px' }}>Note (optional):</label>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          backgroundColor: '#fff',
          color: '#2d3436'
        }}
      />

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: loading ? '#ccc' : '#00b894',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Saving...' : '➕ Add Entry'}
      </button>
    </form>
  );
};

export default AddWeightForm;
