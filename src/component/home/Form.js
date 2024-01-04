import React, { useState } from 'react'

function Form() {

    const [data,setdata] = useState("");

    const handleOnChange = (e) => {
        setdata(e.target.value)
    }

    const [pass, setpass] = useState([])

    const Submit = () => {
        setpass([data])
 }

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <button onClick={Submit}>Click</button>
      <p>{pass}</p>
    </div>
  )
}

export default Form
