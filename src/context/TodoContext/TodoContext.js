import { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
import { TodoReducer } from "./TodoReducer";

export const ACTIONS = {
  ADD: "ADD-TODO",
  DELETE: "DELETE-TODO",
  UPDATE: "UPDATE-TODO"

};

const initialState = {
  query: "",
  todos: [],
  updatingTodo: []
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

  const updateTodo = (id) => {
    dispatch({type: ACTIONS.UPDATE, payload: id});
  }


  useEffect(() => {
    setTodos(state.todos);
  }, [state, setTodos]);

  return (
    <TodoContext.Provider
      value={{
        state,
        add: addTodo,
        del: deleteTodo,
        upd: updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
