import React from "react";
let arr = require("./Heros.json");
class GameBoard extends React.Component {
  constructor() {
    super();
    //    this.heroArr = fetch("./Heros.json")
    //       .then((res) => {res.json()})
    //       .then((data) =>
    //         (console.log(data, "1"))
    //       ).catch(err => console.log(err))
  }
  render() {
    console.log(arr.superheroes);

    return (
      <div style={{disply:'flex'}}>
        {arr.superheroes.map((elem, i) => (
          <div style={{width:'250px',border:'5px black solid'}}>
            <div >
              <img style={{width:'200px'}} src={elem.image}/>
            </div>
            <div>
              <ul>
                <li>{elem.name}</li>
                <li>job: {elem.occupation}</li>
              </ul>
            </div>
           
          </div>
        ))}
      </div>
    );
  }
}

export default GameBoard;
