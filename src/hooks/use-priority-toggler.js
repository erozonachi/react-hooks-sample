import { useCallback } from 'react';

import useTodoStore from './use-todo-store';

const usePriorityToggler = () => {
  const {
    isTodoPrioritized,
    setIsTodoPrioritized,
  } = useTodoStore();

  return useCallback(() => {
    setIsTodoPrioritized(!isTodoPrioritized);
  }, [isTodoPrioritized, setIsTodoPrioritized]);
}

export default usePriorityToggler;
