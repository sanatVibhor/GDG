// Todo.jsx
import React, { useState } from 'react';
import './ExpenseTracker'; // <-- add this at the top
import './todo.css';
import ExpenseTracker from './ExpenseTracker';

const Todo = () => {
  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [note, setNote] = useState('');
  const [todos, setTodos] = useState([]);

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

  const groupedTodos = todos.reduce((acc, curr) => {
    acc[curr.date] = acc[curr.date] || [];
    acc[curr.date].push(curr);
    return acc;
  }, {});

  return (
    <div className="todo-container">
      <h1 className="todo-heading">My Todo App</h1>
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
      <ExpenseTracker />
    </div>
  );
};

export default Todo;
