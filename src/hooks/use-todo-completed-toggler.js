import { useCallback } from 'react';

import useTodoStore from './use-todo-store';

const useTodoCompletedToggler = ({ todoId }) => {
  const {
    todoList,
    setTodoList,
  } = useTodoStore();

  return useCallback((event) => {
    event.preventDefault();

    const updatedTodoList = todoList.map(todo => {
      todo.completed = (todo.id === todoId? !todo.completed : todo.completed);
      return todo;
    });

      setTodoList(updatedTodoList);
  }, [todoId, todoList, setTodoList]);
}

export default useTodoCompletedToggler;
