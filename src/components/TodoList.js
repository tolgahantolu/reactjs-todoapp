import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="todolist-container">
      <ul className="todolist">
        {props.filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              text={todo.text}
              setTodos={props.setTodos}
              todos={props.todos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
