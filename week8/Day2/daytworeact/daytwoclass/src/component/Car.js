import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      brand: "ford",
      model: "mustang",
      year: 2006,
    };
  }

  changecolor = () =>{
    this.setState({color: 'blue'})
  }

  changeRandomColor = () =>{
    let {colors} = this.props
    let randomColor = colors[Math.floor(Math.random()* colors.length)]
    this.setState({color: randomColor})
  }

  render() {
    return (
      <div>
        <h1 style={{backgroundColor: this.state.color}}>My {this.state.brand} </h1>
        <p>
          is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button
         type="button"
         onClick={this.changeRandomColor}>color change</button>
      </div>
    );
  }
}

export default Car