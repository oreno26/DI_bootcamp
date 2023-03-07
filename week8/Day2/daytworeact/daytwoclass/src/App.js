import logo from './logo.svg';
import './App.css';
import Car from './component/Car';
import Actor from './component/Actors';
import Sunrise from './component/Sunrise';


function App() {

  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  return (
    <div style={{backgroundColor: 'darkgray'}}>
     <Car colors={carColors}/>
     <Actor />
     <Sunrise />
    </div>
  );
}

export default App;
