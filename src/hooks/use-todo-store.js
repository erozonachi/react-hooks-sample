import { useContext } from 'react';

import TodoStoreContext from '../contexts/todo-store';

const useTodoStore = () => useContext(TodoStoreContext);

export default useTodoStore;
