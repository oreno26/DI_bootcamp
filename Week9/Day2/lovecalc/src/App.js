import logo from './logo.svg';
import './App.css';
import InputOne from './Component/InputOne';
import InputTwo from './Component/InputTwo';
import Button from './Component/Button';
import Result from './Component/Result';

function App() {
  return (
    <div className="App" >
      <header style={{color:'hotpink', border:'hotpink 1rem double'}} className="App-header">
      <h1 style={{color:'hotpink'}}> LOVE CALCULATOR   </h1>
      <InputOne />
      <InputTwo />
      <Button />
      <Result />

      </header>
    </div>
  );
}

export default App;
