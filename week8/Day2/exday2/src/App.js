import logo from './logo.svg';
import './App.css';
import Cars from './Components/Cars';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = {name: "Ford", model: "Mustang"};
function App() {
  return (
    <div>
      <Cars car={carinfo}/>
      <Events />
      <Phone />
      <Color />
    </div>
  );
}

export default App;
