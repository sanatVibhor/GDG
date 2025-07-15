import React, {useEffect, useState } from 'react'

const useEffect = () => {
    const[count,setcount] = useState(0);
    const[num,setnum] = useState(0);
    useEffect(() => {
        alert("clicked")
    })
    return (
        <div className='useeffect'>
            <h1>This is from UseEffect</h1>
            <button onClick={() => setcount(count + 1)}>button 1</button>
            <h1>count:{num}</h1>
            <button onClick={() => setnum(num + 1)}>button 2</button>

        </div>
    )
}