import logo from "./logo.svg";
import "./App.css";
import Card from "./component/card";
const cards = [
  { points: 1000, title: "Dragon", tag: "*" },
  { points: 200, title: "cat", tag: ">*<" },
  { points: 152, title: "Happy", tag: ":D" },
  { points: 6655, title: "Sad", tag: ":(" },
  { points: 666, title: "Cry", tag: ":,(" },
  { points: 855200, title: "arrow", tag: ">====>" },
  { points: 12000, title: "heart", tag: "<3" },
  { points: 1, title: "i dont know", tag: ":3" },
  { points: 58, title: "thing", tag: "$$" },
  { points: 300, title: "surPRISE", tag: "0-_-0" }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {cards.map((elem, i) => {
          return <Card list={cards[i]} />;
        })}
      </header>
    </div>
  );
}

export default App;
