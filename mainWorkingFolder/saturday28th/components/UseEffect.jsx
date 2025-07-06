import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[count,setcount]=useState(0);
const[num,setnum]=useState(0);
useEffect(()=>{
    alert("clicked")
},[count])
  return (
    <div className='useeffect'>
      <h1>This is from UseEffect</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>setcount(count+1)}>button 1</button>
      <h1>count:{num}</h1>
      <button onClick={()=>setnum(num+1)}>button 2</button>

      
    </div>
  )
}

export default UseEffect
/*
use effect
 it is used to perform side effects.
  an action in the component

  useEffect -> it allows you to run side effects after the component has rendered.

  plsu, they help us in cleaning up any side effects when the component is unmounted.


  side effects have some common features->
  1.updating DOM
  2.fetching and consuming data from server API.
  subscribng to events





  vvi -> useEffect uses two arguments - > callback and dependency.


  dependancy array -> it is passed as the second argument in this hook,and can contain more than one value. 
  dependamcy array is empty then? the effect will only run once when the component is mounted.

  if the array contains any values the effect will re-run whenever the value changes


  API- > [10]->[15]-> logic -> UI






*/