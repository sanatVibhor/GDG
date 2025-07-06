import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home'
import About from '../../pages/About'
const router = createBrowserRouter ([

    {
        path :"/home",
        element : <Home/>
    },
    {
        path:"/about",
        element : <About/>
    }
]);

export default router;