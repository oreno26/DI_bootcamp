import React from "react";
// import TodoList from "./TodoList";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      id: 0,
    };
    this.list = ["work", "be awesome"];
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.list.push(this.state.todo);
    this.setState({ id: this.list.length });
    console.log(this.list);
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  };
  remove = (e) => {
    console.log(e);
    this.list.splice(e, 1);
    this.setState({ id: this.list.length });
    if (this.list.lenth == 0) {
      return <h1>all done!</h1>;
    }
  };

  render() {
    return (
      <div>
        <h1>Todo's</h1>
        <div
          style={{
            minHeight: "400px",
            border: "black 1rem double",
            width: "500px",
            marginLeft: "40%",
          }}
        >
          {this.list.length > 0 ? (
            this.list.map((elem, i) => (
              <div onClick={() => this.remove(i)} key={i}>
                #{i+1} {elem}
              </div>
            ))
          ) : (
            <p>no more to-dos</p>
          )}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            onChange={this.handleChange}
            placeholder="what to do what to do..."
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default Todo;

{
  /* ({this.list.map(elem =>{
            <h1>{elem}</h1>
        })}) */
}
