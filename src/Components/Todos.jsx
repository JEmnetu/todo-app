import React from "react";
import Todo from "./Todo";

const Todos = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
