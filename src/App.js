import './App.css';
import React from 'react'
import TodoItem from './TodoItem'
import { useState, useRef} from 'react'; // 解構

let id = 3;
function App() {
  // immutable
  const [todos, setTodos] = useState([
    { 
      id:1, 
      content:'done', 
      isDone: true 
    },
    { 
      id:2, 
      content:'not done', 
      isDone: false 
    }
  ]);

  const handleButtonClick= () =>{
      setTodos([{id,content:value}, ...todos    ]);
      id++;
      setValue('');
  }


  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  }

  const handleDeleteClick = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleToggleClick =(id) => {
    setTodos(todos.map(todo => {
      if(todo.id !== id){
        return todo;
      }
      else{
        return{
          ...todo,
          isDone: !todo.isDone
        }
      }
    }))
  }

  return (
    <div className="App">
        <input type="text" placeholder="todo" onChange={handleInput} value={value} />
        <button onClick={handleButtonClick}>Add Todo</button>
        {
          todos.map((todo, index) => <TodoItem key={index} todo={todo} handleToggleClick={handleToggleClick} handleDeleteClick={handleDeleteClick} ></TodoItem>)
        }
    </div>
  );
}

export default App;
