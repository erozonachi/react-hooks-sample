import { useMemo } from 'react';

import useTodoStore from './use-todo-store';
import TodoItem from '../components/todo-item';

const useTodoListMemo = () => {
  const { todoList } = useTodoStore();

  return useMemo(() => {
    return (
      <>
        { todoList.length === 0?
          'No Todo Item Found' :
          todoList.map(todo => <TodoItem key={todo.id} todo={todo} />)
        }
      </>
    );
  }, [todoList]);
}

export default useTodoListMemo;
