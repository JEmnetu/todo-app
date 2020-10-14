import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

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
            <h1 id="main-heading">TODO</h1>
            <h3 id="main-sub-heading">Let's get some stuff done today!</h3>
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

            <SingleDatePicker
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={(date) => this.setState({ date: date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              id="cal"
              placeholder="Due Date"
              onFocusChange={() => {
                this.setState({ focused: !this.state.focused });
              }}
              disabled={this.state.setHidden}
            />
          </form>
          <Todos data={todos} />
        </div>
      </div>
    );
  }
}

export default App;
