import React, { useState } from 'react'
import './App.css'
// import Form from './components/Form'
import Login from "./components/Login"
import Todo from "./components/Todo"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Add actual auth logic here later
      setIsLoggedIn(true);
    };


  return (
    <>
      {/* <Form></Form> */}
      {isLoggedIn ? <Todo /> : <Login onLogin={handleLogin} />}
    </>
  )
}

export default App