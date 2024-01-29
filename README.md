# React Hooks Sample

## Getting started

1. Clone this repo `git clone git@github.com:erozonachi/react-hooks-sample.git`
1. Run `npm install` or `npm ci` to install dependencies

## Development

1. Run `npm run dev` and go to the listed port number of your localhost

## Lint

1. `npm run lint` -- to lint your code

### Hooks Usage;

- Custom `useTodoStore` using React's `useContext` hook to make `TodoStoreContext` consumable anywhere within the app's component tree
- Custom `useTodoStoreDefaults` using React's `useState` hook to derive default values and set functions for the `TodoStoreContext`
- Custom `useAddTodoHandler` using React's `useCallback` hook to return a callback function to handle new todo form submission
- Custom `usePriorityToggler` using React's `useCallback` hook to return a callback function to toggle the todo's priority checkbox
- Custom `useTodoCompletedToggler` using React's `useCallback` hook to return a callback function to toggle the completion of a todo item
- Custom `useTodoListMemo` using React's `useMemo` hook to return a memoized `React.JSX.Element` for todo list rendering
- Custom `useTodoItemMemo` using React's `useMemo` hook to return a memoized `React.JSX.Element` for todo item rendering

#### Nice to have (not done yet)

- Testing
