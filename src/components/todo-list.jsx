import useTodoListMemo from '../hooks/use-todo-list-memo';

const TodoList = () => {
  const todoList = useTodoListMemo();

  return (
    <ul>
      { todoList }
    </ul>
  );
}

export default TodoList;
