import React, { useState } from 'react';
import './expense.css';

const ExpenseTracker = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState({});
  const [dailyBudget, setDailyBudget] = useState('');

  const handleSetBudget = () => {
    if (!date || !dailyBudget) return;
    setBudgets({ ...budgets, [date]: parseFloat(dailyBudget) });
    setDailyBudget('');
  };

  const handleAddExpense = () => {
    if (!description || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
    };

    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);

    // Calculate total for the day
    const dailyTotal = updatedExpenses
      .filter((e) => e.date === date)
      .reduce((sum, e) => sum + e.amount, 0);

    // Check budget
    if (budgets[date] && dailyTotal > budgets[date]) {
      alert('Limit exceed');
    }

    // Reset fields
    setDescription('');
    setAmount('');
  };

  const groupedExpenses = expenses.reduce((acc, exp) => {
    acc[exp.date] = acc[exp.date] || [];
    acc[exp.date].push(exp);
    return acc;
  }, {});
  
  return (
    <div className="expense-container">
      <h2>Expense Tracker</h2>

      <div className="expense-inputs">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Set Budget"
          value={dailyBudget}
          onChange={(e) => setDailyBudget(e.target.value)}
        />
        <button onClick={handleSetBudget}>Set Budget</button>
      </div>

      <div className="expense-inputs">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      {Object.keys(groupedExpenses).sort().map((expenseDate) => {
        const dailyTotal = groupedExpenses[expenseDate].reduce(
          (sum, exp) => sum + exp.amount,
          0
        );

        return (
          <div key={expenseDate} className="expense-day-group">
            <h4>{expenseDate}</h4>
            <ul className="expense-list">
              {groupedExpenses[expenseDate].map((exp) => (
                <li key={exp.id}>
                  {exp.description} - ₹{exp.amount}
                </li>
              ))}
            </ul>
            <p><strong>Daily Total:</strong> ₹{dailyTotal}</p>
            <p><strong>Budget:</strong> ₹{budgets[expenseDate] || 'Not set'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseTracker;
