// Todo.jsx
import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
  const rupee = "₹";

  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);
  const [money, setMoney] = useState(0);
  const [budget, setBudget] = useState('');


  const handleAddTodo = () => {
    if (!date || !task) return;
    const newTodo = {
      date,
      task,
      note,
      money: parseFloat(money),
    };
    setTodos([...todos, newTodo]);
    setTask('');
    setNote('');
    setMoney("");
    setBudget("");
  };

  const groupedTodos = todos.reduce((acc, curr) => {
    acc[curr.date] = acc[curr.date] || [];
    acc[curr.date].push(curr);
    return acc;
  }, {});

  // Calculate total spend
  const totalSpent = todos.reduce((sum, t) => sum + t.money, 0);
  const budgetExceeded = budget && totalSpent > parseFloat(budget);

  return (
    <div className="todo-container">
      <h1 className="todo-heading">📝 My Expense Todo Tracker</h1>


      <div className="todo-inputs">
        <input type='number' placeholder={`Set Monthly Budget (${rupee})`} value={budget} onChange={(e) => setBudget(e.target.value)} />
        <p style={{ color: budgetExceeded ? 'white' : 'green', backgroundColor: budgetExceeded ? 'red' : 'transparent', fontWeight: 'bold', padding: "3px", }} >
          Total Spent: {rupee}{totalSpent.toFixed(2)} {budget && ` / Budget: ${rupee}${budget}`} {budgetExceeded && '  Limit Exceeded!' && alert("limit exceed")}
        </p>
        {/* 🚨 */}
      </div>
      <div className="todo-inputs">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <input type='number' placeholder={`Spent (${rupee})`} value={money} onChange={(e) => setMoney(e.target.value)} />
        <textarea placeholder="Optional Note" value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div className="todo-list">
        {Object.keys(groupedTodos).sort().map((todoDate) => {
          const daySpend = groupedTodos[todoDate].reduce((sum, t) => sum + t.money, 0);

          return (
            <div key={todoDate} className="todo-group">
              <h3>{todoDate} - Spent: {rupee}{daySpend.toFixed(2)}</h3>
              {groupedTodos[todoDate].map((item, index) => (
                <div className="todo-item" key={index}>
                  <p><strong>Task:</strong> {item.task}</p>
                  {item.note && <p><em>Note:</em> {item.note}</p>}
                  <p><em>Spent:</em> {rupee}{item.money.toFixed(2)}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
