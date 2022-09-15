import "./App.css";
import { useState } from "React";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewtodo] = useState('');

  function newTodo(todo){
    setNewtodo(todo);
  }

  function handleTodos(){
    setTodos((todos)=>[...todos, newTodo])
  };

  function handleConcluir(todoToremove){
    setTodos((todos)=>{
      const newTodo = todos.filter((todo)=>todo!==todoToremove)

      
      }
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <ul>
          <TodoList />
        </ul>
      </header>
    </div>
  );
}

export default App;
