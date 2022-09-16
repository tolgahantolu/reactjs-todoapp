const TodoItem = (props) => {
  const removeTodoHandler = () => {
    props.setTodos(props.todos.filter((todoEl) => todoEl.id !== props.id));
  };

  const complateTodoHandler = () => {
    props.setTodos(
      props.todos.map((todoEl) => {
        if (todoEl.id === props.id) {
          return {
            ...todoEl,
            completed: !todoEl.completed,
          };
        }

        return todoEl;
      })
    );
  };

  return (
    <div className="todolist__todo">
      <li
        className={`todolist__todoitem ${props.completed ? "completed" : ""}`}
      >
        {props.text}
      </li>

      <button className="todolist__completebtn" onClick={complateTodoHandler}>
        <i className="fa-solid fa-check"></i>
      </button>

      <button className="todolist__deletebtn" onClick={removeTodoHandler}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
