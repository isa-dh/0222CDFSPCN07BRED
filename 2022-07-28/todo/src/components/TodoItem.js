const TodoItem = ({ index, item }) => {
  return (
    <div className="todo-list">
      <li>{item.todo}</li>
    </div>
  );
};

export default TodoItem;
