import React from "react";

class LifecycleMethods extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    
componentDidMount(){
    console.log("Hellooooo")
}
componentDidUpdate(){
    console.log("number",this.state) 
}
increment=()=>{
    this.setState({number: this.state.number + 1}); 
}
render(){
    return(
        <div>
            <h1>Life Cycle Methods!!</h1>
            <button onClick={this.increment}>Add</button>
        </div>
    )
}
}
export  default LifecycleMethods