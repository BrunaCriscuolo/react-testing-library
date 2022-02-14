import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from "react-router-dom"

const MockTodo = () => (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
);

const addTask = (tasks) =>{
  const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
  const buttonElement = screen.getByRole("button", {name: /Add/i})

  tasks.forEach(task => {
    fireEvent.change(inputElement, {target: {value: task}})
    fireEvent.click(buttonElement)
  });
}

it('should render same text passed into title props', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name: /Add/i})
    fireEvent.change(inputElement, {target: {value: "Test"}})
    fireEvent.click(buttonElement)
    const divElement = screen.getByText(/Test/i)
    expect(divElement).toBeInTheDocument();
});

it('should render multiple elements', () => {
  render(<MockTodo />);
  addTask(["Go shopping", "Pet my cat", "Drink water"]);

  const divElement = screen.getAllByTestId('task-container')
  expect(divElement.length).toBe(3);
});

it('task should not have complete class when initially render', () => {
  render(<MockTodo />);
  addTask(["Go shopping"]);
  const divElement = screen.getByText(/Go shopping/i)
  expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
  render(<MockTodo />);
  addTask(["Go shopping"]);
  const divElement = screen.getByText(/Go shopping/i)
  fireEvent.click(divElement)
  expect(divElement).toHaveClass("todo-item-active")
});