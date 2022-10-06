import { ACTIONS } from "./TodoContext";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};
