import React, { useState } from 'react'

function Task() {

    const [data, setdata] = useState('')
    const handleOnChange = (e)=>{
        setdata(e.target.value)
        // console.log(e.target.value )
    }

    const [table, settable]= useState([])

    const save = ()=>{
        settable([...data])
     }

  return (
    <div>
        
      <input type="text"  value={data} onChange={handleOnChange} className='flex justify-center mt-5 ml-5 border' />
      <br />
      <button className='flex justify-center mt-5 ml-5 border' onClick={save}>Click</button>
      <ul>
        {table.map((item, index)=>(
            <li key={index}>{item}</li>

        ))}
      </ul>
      <p>{table}</p>
    </div>
  )
}

export default Task
