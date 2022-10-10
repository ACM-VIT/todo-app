import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
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
  const [todos, setTodos] = useLocalStorage("acm-vit-todos");
  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    return { ...initialState, todos }
  });

  const addTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD, payload: todo });
  };
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  useEffect(() => {
    setTodos(state.todos)
  }, [state, setTodos])

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
