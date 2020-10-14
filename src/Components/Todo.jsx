import React from "react";

const Todo = ({ todo, onDelete, onComplete, index }) => {
  return (
    <li className="todo-item">
      <div>
        <span onClick={() => onComplete(index)}>
          <i
            className="far fa-check-circle fa-2x"
            style={{ color: todo.isCompleted ? "green" : "gray" }}
          />
        </span>
        <span
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "",
          }}
          className="todoText"
        >
          {todo.text}
        </span>
      </div>
      <div>
        <span
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
          className="date"
        >
          {todo.dueDate ? todo.dueDate : "test"}
        </span>
        <span>
          <i className="far fa-calendar-alt fa-2x" />
        </span>
        <span onClick={() => onDelete(index)}>
          <i className="fas fa-times fa-2x" />
        </span>
      </div>
    </li>
  );
};

export default Todo;
