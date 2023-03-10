import logo from "./logo.svg";
import "./App.css";
import GameBoard from "./Component/GameBoard";
import React from "react";
let arr = require("./Component/Heros.json");

class App extends React.Component {
  constructor(props) {
    const Arr = arr.superheroes;
    super(props);
    this.state = { heros: Arr,clickedHeros:[] ,score: 0, highScore: 0};
  }
  checkScore = (score)=>{(
    score > this.state.highScore? this.setState({highScore:score}): this.setState({highScore:this.state.highScore})
  )}
  handleClick = (heroName) => {
    this.setState((state) =>{
      const newScore = state.clickedHeros.includes(heroName)? 0 : state.score +1;
      const clickedHeros = state.clickedHeros.includes(heroName)? []:[...this.state.clickedHeros, heroName] 
      this.checkScore(newScore)
      return{
      heros: [...this.state.heros].sort((a, b) => (Math.random() > 0.5 ? -1 : 1)),
      clickedHeros:clickedHeros,
      score: newScore} 
    }) 
    
  };



  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav className="navbar">
          <h1>superheroes memory game!with react</h1>
          <div>score:{this.state.score}</div>
          <div>TOP score :{this.state.highScore}</div>
        </nav>
        <h2 className="rules">
          Get points by on an image but only click each one once!
        </h2>
        <div className="heros-container">
          {this.state.heros.map((hero,i) => {
            return (
              <div key={hero.id} className="hero-card" onClick={()=>this.handleClick(hero.name)}>
                <img src={hero.image} />
                <p>Name :{hero.name}</p>
                <p>proffesion: {hero.occupation}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
