import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)
    
const incrementHandler=()=>{
   setCount(count+2)    
console.log(count)
}
const decrementHandler=()=>{
    setCount(count-2)
}
  return (
    <>
    <div>Count</div>
    <button onClick={incrementHandler}>+</button>
    <button onClick={decrementHandler}>-</button>

    </>
  )
}

export default Count