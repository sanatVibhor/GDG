// Todo.jsx
import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);

  const [dailyLimit, setDailyLimit] = useState(1000);
  const [expenseAmount, setExpenseAmount] = useState('');
  const [totalExpense, setTotalExpense] = useState(0);
  
  const handleAddTodo = () => {
    if (!date || !task) return;
    const newTodo = {
      date,
      task,
      note,
    };
    setTodos([...todos, newTodo]);
    setTask('');
    setNote('');
  };


  const handleAddExpense = () =>{
    const amount = parseFloat(expenseAmount);
    if (isNaN(amount) || amount <= 0) return;
    setTotalExpense(prev => prev + amount);
    setExpenseAmount('');
  }

  const groupedTodos = todos.reduce((acc, curr) => {
    acc[curr.date] = acc[curr.date] || [];
    acc[curr.date].push(curr);
    return acc;
  }, {});

  return (
    <div className="todo-container">
      <h1 className="todo-heading">My Professional Todo App</h1>
      <div className="todo-expense">
        <h3>Expense Tracker</h3>
        <input type="number" placeholder='Set daily Limit'  value={dailyLimit}
          onChange={(e) => setDailyLimit(Number(e.target.value))}/>
        <div className='todo-add-expense'>
          <input type="number" placeholder='Enter expense amount' value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}/>
          <span><button onClick={handleAddExpense}>Add expense</button></span>
        </div>
        <p><strong>Total Expense</strong>:₹{totalExpense}</p>
        <p><strong>Daily Limit</strong>:₹{dailyLimit}</p>
        {totalExpense > dailyLimit && (
          <p style={{ color: 'red', fontWeight: 'bold' }}> Warning: You have exceeded your daily expense limit!</p>
        )}
      </div>
      <div className="todo-inputs">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <textarea placeholder="Optional Note" value={note} onChange={(e) => setNote(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div className="todo-list">
        {Object.keys(groupedTodos).sort().map((todoDate) => (
          <div key={todoDate} className="todo-group">
            <h3>{todoDate}</h3>
            {groupedTodos[todoDate].map((item, index) => (
              <div className="todo-item" key={index}>
                <p><strong>Task:</strong> {item.task}</p>
                {item.note && <p><em>Note:</em> {item.note}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
