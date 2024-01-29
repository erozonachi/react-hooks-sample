import { useState } from 'react';

const useTodoStoreDefaults = () => {
  const [todoText, setTodoText] = useState('');
  const [isTodoPrioritized, setIsTodoPrioritized] = useState(false);
  const [todoList, setTodoList] = useState([]);

  return {
    todoText,
    setTodoText,
    isTodoPrioritized,
    setIsTodoPrioritized,
    todoList,
    setTodoList,
  };
}

export default useTodoStoreDefaults;
