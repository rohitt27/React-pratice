import React,{useRef, useState} from 'react'

function Calculator() {
    
    const refnum1=useRef();
    const refnum2=useRef();

    const [num,setnum]= React.useState()
  return (   
    <div>
      <input type="number" placeholder='num1' ref={refnum1} />
      <br />
      <input type="number" placeholder='num2' ref={refnum2} />
      <br />

    <button className='border px-2' onClick={()=>setnum(parseInt(refnum1.current.value) + parseInt(refnum2.current.value))}>+</button>
    <button className='border px-2' onClick={()=>setnum(parseInt(refnum1.current.value) - parseInt(refnum2.current.value))}>-</button>
    <button className='border px-2' onClick={()=>setnum(parseInt(refnum1.current.value) / parseInt(refnum2.current.value))}>/</button>
    <button className='border px-2' onClick={()=>setnum(parseInt(refnum1.current.value) * parseInt(refnum2.current.value))}>*</button>

    <p>{num}</p>

    </div>
  )
}

export default Calculator
