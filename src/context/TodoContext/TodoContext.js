import { createContext, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

export const ACTIONS = {
  ADD: "ADD-TODO",
  DELETE: "DELETE-TODO",
};

const initialState = {
  todos: [
    { id: 1, text: "hello", category: "asd" },
    { id: 2, text: "hello", category: "asd" },
    { id: 3, text: "hello", category: "asd" },
    { id: 4, text: "hello", category: "asd" },
  ],
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
