import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todoItem, setTodoItem] = useState([
    { todo: 'Monitoro o aquário', complete: true },
    { todo: 'Dar ração para os gatos', complete: false },
    { todo: 'Beber remédio', complete: false },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItem, { todo, complete: false }];
    setTodoItem(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItem];
    newTodoItems.splice(index, 1);
    setTodoItem(newTodoItems);
  };

  return (
    <div className="app">
      <TodoInput createTodoItem={createTodoItem} />

      {todoItem.map((item, index) => (
        <TodoItem key={index} index={index} item={item} deleteTodoItem={deleteTodoItem} />
      ))}
    </div>
  );
}

export default App;
