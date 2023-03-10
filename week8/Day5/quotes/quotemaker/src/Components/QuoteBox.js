import React from "react";
import Quotes from "./Quotes.js";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      a: "",
      b: "",
      c: "",
    };
    this.arr = []; //myarray to check
  }
  componentDidMount() {
    this.arr = [];
    this.getQuote();
  }

  getQuote = () => {
    let index = Math.floor(Math.random() * Quotes.length); //my random number
    if (this.arr.includes(index)) {
      this.getQuote();
      console.log(this.arr);
    }
    if (this.arr.length == Quotes.length) {
      this.arr = [];
    } else {
      console.log("yes");
      this.arr.push(index);
      let oneQuote = Quotes[index];
      let a = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let c = Math.floor(Math.random() * 255);

      this.setState({
        quote: oneQuote.quote,
        author: oneQuote.author,
        a: a,
        b: b,
        c: c,
      });
    }
  };

  render() {
    const {a,b,c,quote,author} = this.state
    return (
    
      <>
        <button
          style={{
            backgroundColor: `rgb(${a},${b},${c})`,
          }}
          onClick={this.getQuote}
        >
          Button
        </button>
        <div
          style={{
            border:'1rem black solid',
            backgroundColor: `rgb(${a},${b},${c})`,
          }}
        >
          <h1>"{quote}"</h1>
          <h4>"{author}"</h4>
        </div>
      </>
    );
  }
}

export default QuoteBox;
// (<>
//     {Quotes.map(elem =>(
//         <h1>{elem.quote}4</h1>
//     ))}
//     </>
//     )
