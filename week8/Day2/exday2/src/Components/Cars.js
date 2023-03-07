import React from "react";

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            color: "red"
        }
    }
     render(){
        return(
            <>
            <div>this car is a {this.state.color} {this.props.car.name} {this.props.car.model}</div>
            </>
        )
     }
}







export default Cars