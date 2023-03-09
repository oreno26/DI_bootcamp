import logo from "./logo.svg";
import React from "react";
import "./App.css";
import FormComp from "./components/FormComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      nuts:false,
      meat:false,
      pizza:false,

    };
  }
  handleSubmit = (e) =>{
    e.preventDefault();

  } 
  handleChange = (e) => {
    const value = e.target.type == "checkbox"? e.target.checked:e.target.value;
    console.log(this.state);
    this.setState({[e.target.name]:value})
  };

  render() {
    return (
      <div className="App">
        <h1>this is a form</h1>
        <form action="http://localhost:3000/?firstname=?&lastname=&age=&destination=japan" method="post" onSubmit={this.handleSubmit} style={{backgroundColor:'darkcyan',border:'1rem blue double',}}>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
          />
          <br />
          <div onChange={this.handleChange}>
            <input type="radio" value="male" name="gender" />
            male
            <input type="radio" value="female" name="gender" />
            female
          </div>
          <select onChange={this.handleChange} name="destination">
            <option value="japan">japan</option>
            <option value="russia">russia</option>
            <option value="USA">USA</option>
          </select>
          <br />
          Nuts free
          <input
            type="checkbox"
            name="nuts"
            onChange={this.handleChange}
          />
          <br />
          MEAT TO EAt
          <input
            type="checkbox"
            name="meat"
            onChange={this.handleChange}
          />
          <br />
          pizza
          <input type="checkbox" name="pizza" onChange={this.handleChange} />
          <input type="submit" value="submit"/>
        </form>
        <FormComp form={this.state}/>
      </div>
    );
  }
}

export default App;
