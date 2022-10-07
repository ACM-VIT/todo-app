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
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        add: addTodo,
        del: deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
