import { useState, useRef, useCallback } from 'react'
import useInput from './useInput'

export default function useTodos() {
    const { value, setValue, handleChange } = useInput();

    const id = useRef(1);
    const [todos, setTodos] = useState(() => {
    let todoData = window.localStorage.getItem("todos") || "";
    if(todoData){
      todoData = JSON.parse(todoData);
      id.current = todoData[0].id + 1;
    }
    else{
      todoData = [];
    }
    return todoData;
    });
    

  const handleButtonClick= useCallback(() =>{
      setTodos([{id:id.current,content:value}, ...todos])
      id.current++;
      setValue('');
  },[]);

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

    return {value, setValue, handleChange, id, todos, setTodos, handleButtonClick, handleDeleteClick, handleToggleClick };
}