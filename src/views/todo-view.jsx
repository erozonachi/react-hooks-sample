import AddTodo from '../components/add-todo';
import TodoList from '../components/todo-list';

const TodoView = () => {
  return (
    <section className='container'>
      <AddTodo />
      <TodoList />
    </section>
  );
}

export default TodoView;
