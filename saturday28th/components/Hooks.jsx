import React,{useState} from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        if(count === 49) {
            setCount(50);
            setTimeout(()=>setCount(0),1000);
        }
        else {
            setCount(count + 1);
        }
    }
    return (
        <div className = 'hook-component'>
            <h1>This is from useState</h1>
            <h1>count : {count}</h1>
            <button onClick={handleClick}>Click here</button>
            {count === 10 && (
                <div style = {{backgorundColour : "green"}}
            )}
        </div>
    )
}
export default Hooks;