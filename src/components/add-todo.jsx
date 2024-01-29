import useAddTodoHandler from '../hooks/use-add-todo-handler';
import usePriorityToggler from '../hooks/use-priority-toggler';
import useTodoStore from '../hooks/use-todo-store';

const AddTodo = () => {
  const {
    todoText,
    setTodoText,
    isTodoPrioritized,
  } = useTodoStore();
  const priorityToggler = usePriorityToggler();
  const submitHandler = useAddTodoHandler();

  return (
    <form onSubmit={submitHandler}>
        <input id='todo-text' type='text' value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder='Enter Task' required />
        <div>
          <input id='priority-check' type='checkbox' checked={isTodoPrioritized} onChange={priorityToggler} />
          <label>Mark as highest priority</label>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  );
}

export default AddTodo;
