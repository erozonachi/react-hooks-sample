import { useMemo } from 'react';

import useTodoCompletedToggler from './use-todo-completed-toggler';

const useTodoItemMemo = ({
  todoItem,
}) => {
  const todoCompletedToggler = useTodoCompletedToggler({
    todoId: todoItem.id,
  });

  return useMemo(() => {
    return (
      <>
        { todoItem.completed?
          <span style={{textDecoration: 'line-through red', color: '#aaa'}}>{todoItem.value}</span> :
          <span>{todoItem.value}</span>
        }
        <button onClick={todoCompletedToggler}>
          {todoItem.completed? 'Undo' : 'Done'}
        </button>
      </>
    );
  }, [todoItem.completed, todoItem.value, todoCompletedToggler]);
}

export default useTodoItemMemo;
