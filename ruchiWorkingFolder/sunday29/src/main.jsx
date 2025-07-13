import { StrictMode } from 'react'
import  {createRoot}  from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import RouterProvider from "react-router-dom"
// import router from './components/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router = {router} /> */}
  </StrictMode>,
)



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
