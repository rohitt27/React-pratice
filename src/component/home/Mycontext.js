import React, {createContext, useContext} from 'react'

const Mycontext1=createContext()

function Mycontext() {

    const[number,setNumber]=React.useState(100)
  return (
    <Mycontext1.Provider value={number}>
    <div>
      <h1>Context Api Demo!!!</h1>
      <p>Number0 : {number}</p>
      <COne/>
      <CTwo/>

    </div>
    </Mycontext1.Provider>
  )
}

    function COne(){
        const number=useContext(Mycontext1)
        return(
            <div>
                <p>C One component!!!</p>
                <p>Number : {number}</p>
            </div>
        )
    }

    function CTwo(){
        const number=useContext(Mycontext1)
        return(
            <div>
                <p>C Two component!!!</p>
                <p>Number : {number}</p>
            </div>
        )
    }

export default Mycontext
