import React from "react";
const Form = (props) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    // set todos -------------
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.trunc(Math.random() * 1000),
      },
    ]);

    // clear the input state -------------
    props.setInputText("");
  };

  return (
    <form className="todo">
      <input
        // clear the input value -------------
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo__input"
      />
      <button
        onClick={submitTodoHandler}
        type="submit"
        className="todo__button"
      >
        <i className="fa-solid fa-plus"></i>
      </button>

      <div className="todo__select">
        <select name="todos" className="todo__filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
