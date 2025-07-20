import React, { useState } from 'react';
import './WeightForm.css'; // Import the CSS for styling

const WeightForm = ({ onNewEntry }) => {
  const [formData, setFormData] = useState({
    date: '',
    weight: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      onNewEntry(formData);
    setFormData({ date: '', weight: '' });
  };

  return (
    <div className="form-container">
      <h2>Add Weight Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={formData.date}
          onChange={e => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          type="number"
          step="0.1"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={e => setFormData({ ...formData, weight: e.target.value })}
          required
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default WeightForm;
