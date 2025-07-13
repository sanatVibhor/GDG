// import React, { useState } from 'react';
// import LoginPage from '../components/LoginPage'
// import Todo from '../components/Todo';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Add actual auth logic here later
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {isLoggedIn ? <Todo /> : <LoginPage onLogin={handleLogin} />}
//     </div>
//   );
// };

// export default App;
// import React from 'react'
// import ReactExplained from '../components/ReactExplained'
// const App = () => {
//   return (
//     <div>
//       <ReactExplained/>
//     </div>
//   )
// }

// export default App

//explainig props
// import React from 'react'
// import ReactExplained from '../components/ReactExplained'
// import FunctionalComponent from '../components/FunctionalComponent'
// const App = () => {
//   return (
//     <div>
//       <FunctionalComponent name ="GDG"/>
//       <FunctionalComponent name ="SANAT"/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Parent from '../components/Parent'
// const App = () => {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Conditional from '../components/Conditional'
// const App = () => {
//   return (
//     <div>
//       <Conditional/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Event from '../components/Event'
// const App = () => {
//   return (
//     <div>
//       <Event/>
//     </div>
//   )
// }

//export default App



// import React from 'react'
// import Hooks from '../components/Hooks';
// const App = () => {
//   return (
//     <div>
//       <Hooks/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import UseEffect from '../components/UseEffect'
// const App = () => {
//   return (
//     <div>
//       <UseEffect/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import UseMemo from '../components/UseMemo'
// const App = () => {
//   return (
//     <div>
//       <UseMemo/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import UseCallback from '../components/UseCallback'
// const App = () => {
//   return (
//     <div>
//       <UseCallback/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ReactRouter from '../components/ReactRouter'
// const App = () => {
//   return (
//     <div>
//       <ReactRouter/>
//     </div>
//   )
// }

// export default App


// export default App


//below is for new student addition flow
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from '../components/studentDashBoard';

const NotFound = () => (
  <div style={{ padding: '20px', color: 'red' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you’re looking for doesn’t exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="*" element={<NotFound />} /> {/* fallback for invalid routes */}
      </Routes>
    </Router>
  );
}

export default App;


//student form
// import React from 'react';
// import StudentForm from '../components/StudentForm'

// function App() {
//   return (
//     <div>
//       <StudentForm/>
//     </div>
//   );
// }

// export default App;


//student form
// import React from 'react';
// import StudentForm from '../components/StudentForm'

// function App() {
//   return (
//     <div>
//       <StudentForm/>
//     </div>
//   );
// }

// export default App;


