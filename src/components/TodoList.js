import React from "react";

const TodoList = (props) => {
  return (
    <div className="todolist-container">
      <ul className="todolist">
        <div class="todolist__todo">
          <li class="todolist__todoitem">{props.inputText}</li>
          <button class="todolist__completebtn">
            <i class="fa-solid fa-check"></i>
          </button>

          <button class="todolist__deletebtn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;
