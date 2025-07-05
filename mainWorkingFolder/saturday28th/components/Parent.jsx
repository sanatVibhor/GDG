import React from 'react'
import Childc from './Childc'
const Parent = () => {
    const data={
        name :'sanat',
        age:25,
        city: 'pune',
    }
  return (
    <div className='parent'>
        <h1>this is from parent </h1>
      <Childc data ={data}/>
    </div>
  )
}

export default Parent
