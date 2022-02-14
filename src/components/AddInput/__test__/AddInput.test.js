import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn();

it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>);
    const addInputElement = screen.getByPlaceholderText(/add a new task here.../i)
    expect(addInputElement).toBeInTheDocument();
});

it('should be able to type in input', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>);
    const addInputElement = screen.getByPlaceholderText(/add a new task here.../i)
    fireEvent.change(addInputElement, { target:{ value: 'Go Grocery Shopping'} })
    expect(addInputElement.value).toBe('Go Grocery Shopping');
});

it('should have empty inputy when add button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo}/>);
    const addInputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const buttonElement = screen.getByRole('button', {name: /Add/i})

    fireEvent.change(addInputElement, { target:{ value: 'Go Grocery Shopping'} })
    fireEvent.click(buttonElement)

    expect(addInputElement.value).toBe('');
});