import PropTypes from 'prop-types';

import useTodoItemMemo from '../hooks/use-todo-item-memo';

const TodoItem = ({ todo }) => {
  const todoItemContent = useTodoItemMemo({
    todoItem: todo,
  });

  return (
    <li>
      {todoItemContent}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
}

export default TodoItem;
