import { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

export const ACTIONS = {
  ADD: "ADD-TODO",
  DELETE: "DELETE-TODO",
};

const initialState = {
  todos: [],
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const addTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD, payload: todo });
  };
  const deleteTodo = (todo) => {
    dispatch({ type: ACTIONS.DELETE, payload: todo });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        add: addTodo,
        delete: deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
