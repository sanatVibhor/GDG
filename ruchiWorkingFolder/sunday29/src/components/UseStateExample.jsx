import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseStateExample = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);


    // const handleClick = () => {
    //     if(count === 10){
    //         alert("count is 10 +");
    //     }
    //     else{
    //         setCount(count+1);
    //     }
    // }

    useEffect(()=>{
        alert("clicked")
    },[count])

  return (
    <div>
      <h1>CLick the button (usestate example)</h1>
      <h2>Count : {count}</h2>
      <button onClick={()=>setCount(count+1)}>click me </button>
      <h1>CLick the button (useEffect example)</h1>
      <h2>Count : {count1}</h2>
      <button onClick={()=>setCount1(count1+1)}>click me </button>

    </div>
  )
}

export default UseStateExample
