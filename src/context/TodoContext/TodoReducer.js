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
        // eslint-disable-next-line array-callback-return
        todos: state.todos.filter((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
        }),
      };
    case ACTIONS.UPDATE_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
