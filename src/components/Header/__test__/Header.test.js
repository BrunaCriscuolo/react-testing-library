import { render, screen } from '@testing-library/react';
import Header from '../Header';

/* Teste block */
// 1-Renderizar o componente que se deseja testar
// 2-Encontrar os elementos que se deseja interagir
// 3-Interagit com os elementos
// 4-Afirmar qual resultados a gente espera

it('should render same text passed into title props', () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByText(/my header/i);
  expect(headerElement).toBeInTheDocument();
});

it('should render same header get by role', () => {
    render(<Header title="My Header" />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
});

/* SUPONDOOO: */
// Imagina que se tem o seguinte cenário
{/* <>
    <h1 className="header">{title}</h1>
    <h3 className="header">Subtitle</h3>
</> */}
/*
Dessa forma nós temos dois componentes com o role heading, o teste a cima teria falhado, pois o getByRole teria encontrado
2 elemento que correspondesse ao teste, logo, teria dado erro.

Logo uma forma de evitar o erro seria passando o name do elemento desta forma: screen.getByRole("heading", {name: /my header/i});
Assim quando rodasse o teste só seria encontrado um elemento com o name My Header e não causaria erro
*/

  it('should render same header get by role and name', () => {
    render(<Header title="My Header" />);
    const headerElement = screen.getByRole("heading", {name: "Header"});
    expect(headerElement).toBeInTheDocument();
  });

  it('should render same header get by title', () => {
    render(<Header title="My Header" />);
    const headerElement = screen.getByTitle(/header/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render same header get by testid', () => {
    render(<Header title="My Header" />);
    const headerElement = screen.getByTestId(/header-1/i);
    expect(headerElement).toBeInTheDocument();
  });


  //FINDBY
  
  it('should render same text passed into title props findby', async () => {
    render(<Header title="My Header" />);
    const headerElement = await screen.findByText(/my header/i);
    expect(headerElement).toBeInTheDocument();
  });
  
  //QUERYBY

  it('should render same text passed into title props query', () => {
    render(<Header title="My Header" />);
    const headerElement = screen.queryByText(/dogs/i);
    expect(headerElement).not.toBeInTheDocument();
  });

  //GETALLBY

  it('should render same text passed into title props getbyall', () => {
    render(<Header title="My Header" />);
    const headerElements = screen.getAllByRole("heading");
    expect(headerElements.length).toBe(1);
  });