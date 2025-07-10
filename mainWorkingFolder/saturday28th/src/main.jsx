// import { StrictMode } from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';

// import router from './assets/router.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
