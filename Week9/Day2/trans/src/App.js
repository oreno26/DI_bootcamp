import logo from "./logo.svg";
import "./App.css";
import { getUsers } from "./redux/action";
// import TransactionList from "./component/TransactionList";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [users, setUsers] = useState([]);
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
    
  
  
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
         users.map((user, i) => {
          return (
            <div key={i}>
              {user.name}
            </div>
          )
        })
        }
      </header>
    </div>
  );
}

export default App;
{
  /* <TransactionList /> */
}
