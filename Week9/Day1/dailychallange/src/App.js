import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE SELECTOR</h1>
         <MovieList/>  
         <MovieDetails/>
      </header>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{
    movie: state.movies
  }
}

export default connect(mapStateToProps)(App);
