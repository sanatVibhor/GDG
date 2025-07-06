import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <p>from home</p>
      <Link to ="/home">go to home</Link>
    </div>
  )
}

export default Home
