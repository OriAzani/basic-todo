import './App.css';
import { TodoList } from './cmp/TodoList/TodoList';
import { AddForm } from './cmp/AddForm/AddForm';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';


function App() {
  const [todos, setTodos] = useState(null)

  const initData = [
    {
      id: uuidv4(),
      desc: "buy something",
      isDone: true
    },
    {
      id: uuidv4(),
      desc: "eat something",
      isDone: true
    }
  ];


  // Only on init
  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos");
    if (todosFromLocalStorage) {
      setTodos(JSON.parse(todosFromLocalStorage));
    } else {
      setTodos(initData)
    }
  }, []);


  // Every change to todos
  useEffect(() => {
    if (todos !== null) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }, [todos])

  const addTodo = (desc) => {
    const todoToAdd = {
      desc,
      id: uuidv4(),
      isDone: false
    }

    setTodos([...todos, todoToAdd]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    })

    setTodos(filteredTodos);
  }


  if (!todos || todos.length === 0) return;
  return (
    <div className="App">
      <AddForm addTodo={addTodo}></AddForm>
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;