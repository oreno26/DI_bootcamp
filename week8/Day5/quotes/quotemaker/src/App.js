import logo from "./logo.svg";
import React from "react";
import "./App.css";
import QuoteBox from "./Components/QuoteBox";

class App extends React.Component {
      constructor(){
        super();
        this.state={
        color:'blue'
      }}
  
 
  
  render(){ 
  return (
    <div  className="App">
      
        <div >
          <QuoteBox />
        </div>
      
    </div>
  );}
}

export default App;
