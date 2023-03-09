import React from 'react';
import logo from './logo.svg';
import './App.css';

class Apponce extends React.Component{
   
  constructor(props){
    super(props);
    this.state ={
      email: '',
      username:'',
      message: '',
      color:'',
      onoff:''

    }
  }


 handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state.email, this.state.username,this.state.message, this.state.color, this.state.onoff);

  
 }
 handleChange = (e) =>{
  const value = e.target.type == "checkbox" ? e.target.checked : e.target.value;
  this.setState({[e.target.name]:value})
 }
 
 
 render(){
  return (
    <div className="App">
      <h1>FORMS</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='email' name='email' onChange={this.handleChange}/><br/>
        <input type="text" placeholder='username' name='username' onChange={this.handleChange} /><br/>
        <textarea onChange={this.handleChange} name='message'/><br/>
        <select onChange={this.handleChange} name="color"><br/>
          <option value="">please choose</option>
          <option value="red">a</option>
          <option value="green">c</option>
          <option value="blue">b</option>
        </select><br/>
        on/off<input type="checkbox" name="onoff" onChange={this.handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}}

export default Appone;
