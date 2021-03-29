import './App.css';
import React from 'react'
import TodoItem from './TodoItem'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'; // 解構
import useTodos from './useTodos'

function App() {


  const {value, handleChange, setValue, id, todos, setTodos, handleButtonClick, handleToggleClick, handleDeleteClick } = useTodos();

  function writeTodosToLocalStorage(todos){
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  function Button({children}) {
    console.log('render button');
    return <button onClick={handleButtonClick}>{children}</button>
  }

  //第一次render的時候想要做什麼
  // useLayoutEffect(()=>{
  // }, [])

  //執行完畢想要做什麼
  useEffect(()=>{

    writeTodosToLocalStorage(todos);
    
    // 在這個 Effect 被清掉前做的事
    return () => {
      
    };
  },[todos])

  return (
    <div className="App">
        <input type="text" placeholder="todo" onChange={handleChange} value={value} />
        <Button onClick={handleButtonClick}>Add Todo</Button>
        {
          todos.map((todo, index) => <TodoItem key={index} todo={todo} handleToggleClick={handleToggleClick} handleDeleteClick={handleDeleteClick} ></TodoItem>)
        }
    </div>
  );
}

export default App;
