import { useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import useTodoStore from './use-todo-store';

const useAddTodoHandler = () => {
  const {
    todoText,
    setTodoText,
    isTodoPrioritized,
    setIsTodoPrioritized,
    todoList,
    setTodoList,
  } = useTodoStore();

  return useCallback((event) => {
    event.preventDefault();

    if (todoText?.trim()) {
      const newTodo = {
        id: uuid(),
        value: todoText.trim(),
        completed: false,
      };
      const updatedTodoList = isTodoPrioritized? [newTodo, ...todoList] : [...todoList, newTodo];

      setTodoList(updatedTodoList);
      setTodoText('');
      setIsTodoPrioritized(false);
    }
  }, [todoText, isTodoPrioritized, todoList, setTodoList, setTodoText, setIsTodoPrioritized]);
}

export default useAddTodoHandler;
