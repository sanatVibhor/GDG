import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
  <img src="/favicon.svg" className="logo" alt="Shivi Logo" />
</div>
      <h1>Welcome, Shivi! 🩷</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click the button above and see the magic happens!
      </p>
    </>
  )
}

export default App
