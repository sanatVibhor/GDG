import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    const[count, setcount]=useState(0);
    const handleClick=useCallback(()=>{
        setcount(count+1);

    },[count]);
  return (
    <div>
      <p>from use call back</p>
      <p>count:{count}</p>
      <button onClick={handleClick}> increment count</button>
      <ChildUseCallback handleClick={handleClick} />
    </div>
  );
}
const ChildUseCallback = ({ handleClick }) => {
    return (
      <div>
        <div>Child component</div>
        <button onClick={handleClick}>Increment Button</button>
      </div>
    );
  };
export default UseCallback;
/**
it retuens a memoised varsion of the callback 



*/