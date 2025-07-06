import React,{useState} from 'react'

const Hooks = () => {
    const[count, setCount]=useState(0);
    const handleClick=()=>{
        if(count === 49){
            setCount(50);
            setTimeout(()=>setCount(0),1000);

        }
        else{
            setCount(count+1);
        }
    }
  return (
    <div className='hook-component'>
      <h1>This is from useState</h1>
      <h1>count : {count}</h1>
    <button onClick={handleClick}> click here</button>
    {count === 10 && (
        <div style = {{backgroudnColor :"green"}}>you have reached 10 </div>
    )}

    {
        count === 50 && (
            <div style = {{backgroudnColor :"red"}}> you have reached the limit</div>
        )
    }


    </div>
  )
}

export default Hooks


//50 -> message "limit reached"
//10 multiples of 10 -> "hall is being filled"

/*
Hooks



hooks are fucntions which allow us to use state and other react features in functional components.

16.8
 class components -> no
 hooks-> fucntional components
 hooks helps us to use state without writing a class.



 class components -?  lifecycle methods-> componentDidMount, componentWillUnmount etc
 hooks -> useEffect -> better and cleaner code


 where should we use hooks?
 1. do not use them inside loops, conditions etc
 at the top level
 2.only call hooks from react functions
 script.js- > useState, react functional component.



 useState
 useEffect
 useMemo
 useRef
 useReducer
 useParams
 useCallback



 1.  useState
 to track state in a functional component.


 state - ? -> it refers to data or properties that needs to be tracked in an application.

 example -> useState could be used to toggle between 2 values, usually true or false.

import {useState} fromm 'react'

const[count, setCount]=useState(0);

count-> current state

setCount -> update the counters state



*/