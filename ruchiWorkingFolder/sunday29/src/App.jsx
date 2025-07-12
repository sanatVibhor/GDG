import React, {useState} from 'react'
import './App.css'
// import ReactRouter from './components/ReactRouter'
// import Form from './components/Form'
import Login from "./components/Login"
import Todo from "./components/Todo"
// import UseStateExample from './components/UseStateExample';
// import UseMemo from './components/UseMemo';
// import UseCallbk from './components/UseCallbk';

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
      {/* <UseStateExample/> */}
      {/* <UseMemo/> */}
      {/* <UseCallbk/> */}
      {/* <ReactRouter /> */}
    </>
  )
}

export default App