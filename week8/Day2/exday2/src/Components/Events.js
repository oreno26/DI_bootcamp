import React from "react";

class Events extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isToggle: true,
        }
    }

    toggle = () =>{
    console.log("4");
    if(this.state.isToggle == true){
     this.setState({isToggle: false})}   
    else{this.setState({isToggle: true})}
    }

     clickMe = ()=> {
        alert('i have been clicked')
    }

    handleKeyPress = (e) =>{
      if(e.keyCode == 13){
        alert('enter')
      }

    }
    render(){
        
        return(
            <div>
            <button type="button" onClick={ this.clickMe }>CLICK ME</button> 
            <input type="text" onKeyDown={(e) => this.handleKeyPress(e)}/>
            <button type="buttton" onClick={this.toggle}>{this.state.isToggle? "on" : "off"}</button>
            </div>
        )
    }
}

export default Events