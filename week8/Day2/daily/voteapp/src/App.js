import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }
  vote = (e) => {
    if (e.votes == 5) {
      alert("we have a WINNER");
    }
    this.setState({ votes: e.votes++ });
  };

  render() {
    let lang = this.state.languages;
    return (
      <div style={{ backgroundColor: "pink", textAlign: "center",width: '30vw' }}>
        <h1>vote for your fav</h1>
        {lang.map((elem) => (
          <div style={{ border: "10px blue double", marginTop: "10px" }}>
            {elem.name} number of votes: {elem.votes}{" "}
            <button type="button" onClick={() => this.vote(elem)}>
              VOTE FORE ME
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
