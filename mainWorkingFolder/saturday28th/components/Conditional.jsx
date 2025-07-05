import React, { useState } from 'react'

const Conditional = () => {
    const[showText, SetshowText]=useState(false);
    const handleClick=()=>{
        SetshowText(!showText)
    };
  return (
    <div className='conditional-rendering'>
      <button onClick={handleClick} >   submit </button>
      {showText && <p> Clicking on submit button will lead to submission of your test </p> }
    </div>
  );
}

export default Conditional;
