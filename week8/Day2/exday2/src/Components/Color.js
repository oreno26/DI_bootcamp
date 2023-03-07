import React from "react";



class Color extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            color: 'red'
        }

    }
        componentDidMount() {
            setTimeout(() =>{
            this.setState({color: 'still red'})
        },5000)}

        changeColorToRed = () =>{
this.setState({color: "RED DAMN IT STOP ASKING ALSO @BUDBUD_THE_PRINCE"})
        }

    render(){
        return(
            <>
            <button type="button" onClick={this.changeColorToRed}>CHANGE</button>
            <p>my favourite color {this.state.color} </p>
             </>
        )
    }
}


 
export default Color