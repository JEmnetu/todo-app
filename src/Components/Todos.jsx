import React from "react";
import Todo from "./Todo";

const Todos = ({ data, onDelete, onComplete }) => {
  return (
    <div>
      <ul>
        {data ? (
          data.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onDelete={onDelete}
              onComplete={onComplete}
              index={index}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", marginTop: "3em" }}>
            Nothing to do? Click Add Task to enter a new todo!
          </h2>
        )}
      </ul>
    </div>
  );
};

export default Todos;
