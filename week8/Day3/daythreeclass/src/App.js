import logo from "./logo.svg";
import "./App.css";
import User from "./Component/User";
// import users from "./Ropotx.json";
import React from "react";
import SearchBox from "./Component/SearchBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users_arr: [],
      color: "black",
      text: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "darkblue" });
    }, 5000);
  }

  showUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users_arr: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  sort = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const filterdUsers = this.state.users_arr.filter((item) => {
      return item.name.toLowerCase().includes(this.state.text.toLowerCase());
    });

    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <button type="button" onClick={() => this.showUser()}>
          Show Users
        </button>
        <SearchBox sort={this.sort}/>
        {filterdUsers.map((item, i) => {
          return (
            <>
              <User
                name={item.name}
                email={item.email}
                username={item.username}
              />
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
