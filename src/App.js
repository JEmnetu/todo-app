import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";

class App extends Component {
  state = {
    date: null,
    focused: false,
    todos: [
      { text: "First", isCompleted: false },
      { text: "Second", isCompleted: false },
      { text: "Third", isCompleted: false },
      { text: "Fourth", isCompleted: false },
    ],
    value: "",
    setHidden: true,
  };
  render() {
    const { value, todos, setHidden, date } = this.state;

    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>Todo</h1>
            <h3>Let's get some stuff done today!</h3>
          </header>
          <form>
            <button id="add-button">
              <span id="plus-icon">
                <i className="fas fa-plus" />
              </span>
              Add Task
            </button>
            <br />
            <input
              type="text"
              name="todo"
              id="todo-form"
              placeholder="What are we doing today?"
              value={value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </form>
          <Todos data={todos} />
        </div>
      </div>
    );
  }
}

export default App;
