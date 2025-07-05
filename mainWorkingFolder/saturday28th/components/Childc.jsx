import React from 'react'

const Childc = (props) => {
  const {data}=props;
  return (
    <div>
      <h1>this is from child</h1>
      <p>Name :  {data.name}</p>
      <p> Age : {data.age}</p>
      <p> City : {data.city}</p>
    </div>
  )
}

export default Childc
