import React, { useState } from 'react';
import LoginPage from '../components/LoginPage'
import Todo from '../components/Todo';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add actual auth logic here later
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Todo /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
};

export default App;