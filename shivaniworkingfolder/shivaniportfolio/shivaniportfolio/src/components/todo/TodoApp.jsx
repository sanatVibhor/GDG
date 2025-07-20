import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
Chart.register(BarElement, CategoryScale, LinearScale);

const ding = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.wav');

function TodoApp() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('shivani-tasks');
    return stored ? JSON.parse(stored) : [];
  });
  const [dark, setDark] = useState(false);
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem('shivani-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const total = expenses.reduce((a, b) => a + b, 0);
    if (budget && total > parseFloat(budget)) {
      alert('limit exceed');
    }
  }, [expenses, budget]);

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput('');
    ding.play();
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const styles = {
  container: {
  maxWidth: '650px',
  margin: '2rem auto',
  padding: '1.5rem',
  borderRadius: '12px',
  background: dark ? '#1f1f1f' : '#fff7f0',
  color: dark ? '#fff' : '#111',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
  fontFamily: "Segoe UI, sans-serif",
  maxHeight: '90vh',       // 👈 Controls height
  overflowY: 'auto',       // 👈 Adds vertical scroll if needed

    },
    topBar: {
display: 'flex',
   justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    heading: { fontSize: '1.6rem' },
    toggleBtn: {
      padding: '0.4rem 0.8rem',
      background: dark ? '#fff' : '#111',
      color: dark ? '#111' : '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
    },
    inputRow: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1rem',
    },
    input: {
      flex: 1,
      padding: '0.6rem',
      borderRadius: '6px',
      fontSize: '1rem',
      border: '1px solid #ccc',
    },
    addBtn: {
      background: '#ec4899',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '0.6rem 1rem',
      cursor: 'pointer',
    },
    sectionTitle: {
      fontSize: '1.3rem',
      marginTop: '2rem',
      marginBottom: '1rem',
      borderBottom: '1px solid #ddd',
      paddingBottom: '0.4rem',
    },
    listItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.6rem',
      marginBottom: '0.5rem',
      background: dark ? '#2a2a2a' : '#fff',
      borderRadius: '6px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    },
    taskText: (completed) => ({
      textDecoration: completed ? 'line-through' : 'none',
      color: completed ? (dark ? '#aaa' : '#999') : dark ? '#fff' : '#111',
      cursor: 'pointer',
    }),
    delBtn: {
      background: 'transparent',
      border: 'none',
      color: '#f43f5e',
      fontSize: '1.2rem',
      cursor: 'pointer',
    },
  };

  const chartData = {
    labels: expenses.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: '#f43f5e',
      },
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.topBar}>
        <h2 style={styles.heading}>📝 Shivani's Productivity Hub</h2>
        <button style={styles.toggleBtn} onClick={() => setDark(!dark)}>
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Add Task */}
      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button style={styles.addBtn} onClick={addTask}>Add</button>
      </div>

      {/* Todo List */}
      <h3 style={styles.sectionTitle}>✅ Tasks</h3>
      <ul style={{ paddingLeft: 0 }}>
        {tasks.map((task, idx) => (
          <li key={idx} style={styles.listItem}>
            <span
              style={styles.taskText(task.completed)}
              onClick={() => toggleComplete(idx)}
            >
              {task.text}
            </span>
            <button style={styles.delBtn} onClick={() => deleteTask(idx)}>🗑</button>
          </li>
        ))}
      </ul>

      {/* Expense Tracker */}
      <h3 style={styles.sectionTitle}>💸 Expense Tracker</h3>
      <div style={styles.inputRow}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <button
          style={{ ...styles.addBtn, background: '#10b981' }}
          onClick={() => {
            if (amount.trim()) {
              setExpenses([...expenses, parseFloat(amount)]);
              setAmount('');
            }
          }}
        >
          Add Expense
        </button>
      </div>

      <div style={styles.inputRow}>
        <input
          type="number"
          placeholder="Set daily budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          style={styles.input}
        />
      </div>

      <ul style={{ paddingLeft: 0 }}>
        {expenses.map((amt, idx) => (
          <li key={idx} style={styles.listItem}>
            <span>₹{amt.toFixed(2)}</span>
            <button
              style={styles.delBtn}
              onClick={() => {
                const updated = expenses.filter((_, i) => i !== idx);
                setExpenses(updated);
              }}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        Total Spent: ₹{expenses.reduce((a, b) => a + b, 0).toFixed(2)} / ₹{budget || '—'}
      </p>

      {/* Bar Chart */}
      <h3 style={styles.sectionTitle}>📊 Expense Overview</h3>
      <Bar data={chartData} />
      <div style={{
  maxHeight: '250px',
  maxWidth: '100%',
  marginBottom: '2rem',
  overflow: 'hidden',
}}>
  <Bar
    data={chartData}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 50, font: { size: 12 } },
          grid: { display: false }
        },
        x: {
          ticks: { font: { size: 12 } },
          grid: { display: false }
        }
      }
    }}
    height={200}
  />
</div>

      {/* Calendar & Submit */}
      <h3 style={styles.sectionTitle}>🗓️ Daily Planner</h3>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
      }}>
        <div style={{
          maxWidth: '280px',
          background: dark ? '#2a2a2a' : '#fafafa',
          padding: '1rem',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          transform: 'scale(0.9)',
          transformOrigin: 'top center'
        }}>
          <Calendar value={selectedDate} onChange={setSelectedDate} />
          <p style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            Selected: <strong>{selectedDate.toDateString()}</strong>
          </p>
  </div>
  {/* Final Submit Button */}
<div style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
  <button
    style={{
      background: '#6d28d9',
      color: '#fff',
      border: 'none',
      padding: '0.8rem 2rem',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}
    onClick={() => alert(`✅ Submitted tasks, expenses & plan for ${selectedDate.toDateString()}!`)}
  >
    Submit All
  </button>
</div>
</div>
</div>
  );
  }
export default TodoApp