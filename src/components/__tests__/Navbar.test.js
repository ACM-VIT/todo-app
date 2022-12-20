import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar/Navbar';

test('should render Navbar component', () =>  {
    render(<Navbar/>);
    const navbarElement = screen.getByTestId('todo-2');
    expect(navbarElement).toBeInTheDocument();
})