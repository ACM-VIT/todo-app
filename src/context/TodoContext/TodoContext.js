import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
import { TodoReducer } from "./TodoReducer";

export const ACTIONS = {
  ADD: "ADD-TODO",
  DELETE: "DELETE-TODO",
  UPDATE_QUERY: "UPDATE-UQERY",
};

const initialState = {
  query: "",
  todos: [],
};

export const TodoContext = createContext(initialState);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage("acm-vit-todos");
  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    return { ...initialState, todos: todos && todos.length > 0 ? todos : [] };
  });

  const addTodo = (todo) => {
    dispatch({ type: ACTIONS.ADD, payload: todo });
  };
  const deleteTodo = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };
  const updateQuery = (value) => {
    if (!value) value = "";
    value = String(value).trim();
    dispatch({ type: ACTIONS.UPDATE_QUERY, payload: value });
  };

  useEffect(() => {
    setTodos(state.todos);
  }, [state, setTodos]);

  return (
    <TodoContext.Provider
      value={{
        // todos: state.todos,
        ...state,
        add: addTodo,
        del: deleteTodo,
        updateQuery,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
