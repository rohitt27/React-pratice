import React,{useEffect, useState} from 'react'

function UseEffect() {

    const [userList,setuserList]= React.useState ([]);

    const userObj={
       "username":"" 
    }

    const [user,setUser]=React.useState(userObj)

    useEffect(()=>{
        console.log("Hiiiii");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(res=>{
            setuserList(res)
        })
    },[])

    const onInputChange=((event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    })

    const addData=()=>{
    setuserList([...userList,user])

    }

  return (
    <div>
        <h1>Use Effect Api call</h1>
      <input type="text" name="username"  className= "border" onChange={onInputChange} />
      <button type='button' onClick={addData}>Add</button>
     <Childcomponent userList={userList}/>
    </div>
  )
}

function Childcomponent(userList){
  return(
    <>
    <ul>
    {

        userList.userList.map((user)=>(
            <li>{user.username}</li>
        ))
    }
  </ul>
  </>
  )
}

export default UseEffect
