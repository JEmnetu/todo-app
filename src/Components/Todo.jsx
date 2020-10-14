import React from "react";

const Todo = ({ todo }) => {
  return (
    <li>
      <span>
        <i className="far fa-check-circle" />
      </span>
      {todo.text}
    </li>
  );
};

export default Todo;
