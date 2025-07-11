import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

const UseCallbk = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(()=>{
        setCount(count+1);
    },[count]);

  return (
    <div>
      <p>use call back hook</p>
      <p>count : {count}</p>
      <button onClick={handleClick}>increase count in parent file</button>
      <Childcallback handleClick={handleClick} />
    </div>
  )
}

const Childcallback = ({handleClick}) => {
    return(
        <div>
            <div>child</div>
            <button onClick={handleClick}>child button</button>
        </div>
    )
}

export default UseCallbk
