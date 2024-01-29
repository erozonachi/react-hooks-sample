import TodoView from './views/todo-view';
import TodoStoreContext from './contexts/todo-store'
import useTodoStoreDefaults from './hooks/use-todo-defaults';

function App() {
  const storeDefaults = useTodoStoreDefaults();

  return (
    <TodoStoreContext.Provider value={storeDefaults}>
      <TodoView />
    </ TodoStoreContext.Provider>
  );
}

export default App
