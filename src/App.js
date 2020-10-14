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
    todos: [],
    value: "",
    setHidden: true,
  };
  componentDidMount = () => {
    const storedTodos = JSON.parse(localStorage.getItem("Todos"));
    storedTodos
      ? this.setState({ todos: storedTodos })
      : console.log("No stored todos");
  };

  handleSubmit = (e) => {
    const { value, todos, setHidden, date } = this.state;
    e.preventDefault();
    if (!this.state.value) {
      this.setState({ setHidden: !this.state.setHidden });
      return;
    }
    if (!this.state.date) {
      alert("Please select a due date!");
      return;
    }

    const newTodo = {
      text: value,
      isCompleted: false,
      dueDate: date.toString().split("2020")[0],
    };
    const allTodos = [...todos, newTodo];

    this.setState({ todos: allTodos });
    this.setState({ value: "" });
    localStorage.setItem("Todos", JSON.stringify(allTodos));
  };

  deleteTodo = (index) => {
    let newTodos = [...this.state.todos];

    if (newTodos[index].isCompleted === false) {
      let c = window.confirm(
        "This task has not been completed. Are you sure you want to delete?"
      );

      if (c === false) {
        return;
      }
    }
    newTodos.splice(index, 1);
    this.setState({ todos: newTodos });
    localStorage.setItem("Todos", JSON.stringify(newTodos));
  };

  completeTodo = (index) => {
    let newTodos = [...this.state.todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    this.setState({ todos: newTodos });
    localStorage.setItem("Todos", JSON.stringify(newTodos));
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
          <form onSubmit={this.handleSubmit}>
            <button id="add-button" type="submit">
              <span id="plus-icon">
                <i className="fas fa-plus" />
              </span>
              Add Task
            </button>
            <br />
            <input
              type={setHidden ? "hidden" : "text"}
              name="todo"
              id="todo-form"
              placeholder="What are we doing today?"
              value={value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />

            <SingleDatePicker
              date={this.state.date}
              onDateChange={(date) => this.setState({ date: date })}
              focused={this.state.focused}
              id="calender"
              placeholder="Due Date"
              onFocusChange={() => {
                this.setState({ focused: !this.state.focused });
              }}
              disabled={this.state.setHidden}
              daySize={80}
            />
          </form>
          <Todos
            data={todos}
            onDelete={this.deleteTodo.bind(this)}
            onComplete={this.completeTodo.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
