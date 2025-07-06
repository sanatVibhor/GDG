import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

const UseMemo = () => {

    const [a,setA] =useState(0);
    const [b,setB] =useState(0);

    const result=useMemo(()=>{
        console.log("resultis being calculated");
        return a+b;
    },[a+b])

  return (
    <div>
      <div>use memeo</div>
      <h1>Result : {result}</h1>
      <button onClick={()=>setA(a+1)}>increase a</button>
      <button onClick={()=>setB(b+1)}>increase b</button>
    </div>
  )
}

export default UseMemo
