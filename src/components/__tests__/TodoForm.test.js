import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from '../TodoForm/TodoForm';
import { ThemeContext } from "C:/Users/jakub/IdeaProjects/todo-app/src/App";
import { TodoContext } from "../../context/TodoContext/TodoContext";
import "C:/Users/jakub/IdeaProjects/todo-app/src/styles/App.css";
import SelectTextFields from "../Category/Category";

test('should render TodoFrom component', () =>  {
    render(<ThemeContext.Provider value={false}>
        <TodoForm/>
        </ThemeContext.Provider>);
    const todoFormElement = screen.getByTestId('todo-1');
    expect(todoFormElement).toBeInTheDocument();
})


//test('test', () => {
//   expect(true).toBe(true);
//})