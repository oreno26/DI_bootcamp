import logo from './logo.svg';
import NoJsx from './Nojsx.js';
import WithJsx from './Jsx';
import FavAnim from './UserFavAnimals';
import EX4 from './Exercise4';
import './App.css';


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <>
    <h3>{user.firstName + " " + user.lastName}</h3>
    <FavAnim animal={user.favAnimals}/>
    <NoJsx />
    <WithJsx />
    <EX4 />
    </>
  );
}

export default App;
