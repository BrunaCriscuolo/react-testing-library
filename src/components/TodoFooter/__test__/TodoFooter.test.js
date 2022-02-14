import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from "react-router-dom"

// Explicações sobre o teste em: https://www.notion.so/Testes-c0d0d4e963a042d0af935007f85876e5
const MockTodoFooter = ({numberOfIncompleteTasks}) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("TodoFooter", ()=>{
  it('should render the corret amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const todoFooterElement = screen.getByText(/5 tasks left/i)
    expect(todoFooterElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const todoFooterElement = screen.getByText(/1 task left/i)
    expect(todoFooterElement).toBeInTheDocument();
  });
})
