// import React from "react";
import { useState, useEffect } from "react";

const CounterHook = (props) => {
  // const [state, setState] = useState(0) --> this can be used as a CALLBACK function
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <>
      count : {count}
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      {email}
      <button type="button" onClick={() => setCount(count + 1)}>
        add
      </button>
      {
        users.map(item =>{
            return(
                <p>
                {item.name }
                </p>
            )
        })
      }
    </>
  );
};

export default CounterHook;
