import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[a,setA]=useState(0);
    const[b,setB]=useState(0);

    const result=useMemo(()=>
    {
        console.log("result is being calculated");
        return a+b;
    },[a+b])
  return (
    <div className='usememo'> 
      <h1>from usememo</h1>
    <p>Result :{result}</p>
      <button onClick={()=>setA(a+1)}>increment A</button>
      <button onClick={()=>setB(b+1)}>increment B </button>
    </div>
  )
}

export default UseMemo
/**
usememo->

it helps us to memoize the result of a function.
and recompute the result only when the dependacny of the function have chnaged.


used to optimise the performance of the react components.



















 */