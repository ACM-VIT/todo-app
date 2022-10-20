import { ACTIONS } from "./TodoContext";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        updatingTodo: []
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        }),
      };
    case ACTIONS.UPDATE:
      return {
        ...state,
        // eslint-disable-next-line array-callback-return
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        }),
        updatingTodo: state.todos.filter((todo) => {
          if (todo.id === action.payload) {
            return todo;
          }
        }),
      }
    default:
      return state;
  }
};
