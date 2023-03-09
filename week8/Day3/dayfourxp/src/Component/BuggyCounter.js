import React from "react";

class BuggyCounter extends React.Component{
    constructor(){
        super();
        this.state ={
            count: 0
        }
    }

    add = () =>{
        this.setState({count:this.state.count +1})
    }
render(){
    if(this.state.count >5){
        throw Error("crashed")
    }
    return(
        <>
        {this.state.count}
        <button type="button" onClick={this.add}>add</button>
        </>
    )
}
}

export default BuggyCounter