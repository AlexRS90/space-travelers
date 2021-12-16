import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

afterEach(() => {
  cleanup();
});

describe('render navbar to the screen', () => {
  test('render navbar to the screen', () => {
    render(<Router><Navbar /></Router>);
    const navbarElement = screen.getByTestId('nav');
    expect(navbarElement).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
