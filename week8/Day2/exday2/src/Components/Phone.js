import React from "react";

class Phone extends React.Component {
    constructor(){
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    changeColor = () => {
        this.setState({color: 'blue'})
    }
    render(){
        return(
            <>
            <h1>MY PHONE IS A {this.state.brand}</h1>
            <p>it is a {this.state.color} {this.state.model} From {this.state.year}</p>
            <button type="button" onClick={this.changeColor}>i prefer...BLUE</button>

            </>
        )
    }
}

export default Phone