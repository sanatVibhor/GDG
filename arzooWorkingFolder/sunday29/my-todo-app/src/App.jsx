// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [expense, setExpense] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  const [dailyLimit, setDailyLimit] = useState(0);
  const [task, setTask] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    const value = parseInt(expense);
    if (!isNaN(value)) {
      setTotalExpense(prev => prev + value);
      setExpense('');
    }
  };

  return (
    <div className="container">
      <h1>My Professional Todo App</h1>
      <div className="expense-box">
        <h3>Expense Tracker</h3>
        <input
          type="number"
          placeholder="0"
          value={expense}
          onChange={e => setExpense(e.target.value)}
        />
        <div className="expense-input">
          <input type="text" placeholder="Enter expense amount" />
          <button onClick={handleAddExpense}>Add expense</button>
        </div>
        <p><strong>Total Expense:</strong> ₹{totalExpense}</p>
        <p><strong>Daily Limit:</strong> ₹{dailyLimit}</p>
      </div>

      <div className="todo-form">
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <textarea
          placeholder="Optional Note"
          value={note}
          onChange={e => setNote(e.target.value)}
        ></textarea>
        <button className="add-todo">Add Todo</button>
      </div>
    </div>
  );
}

export default App;