import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

afterEach(() => {
  cleanup();
});

describe('render navbar to the screen', () => {
  test('render navbar to the screen', () => {
    render(<Navbar />);
    const navbarElement = screen.getByTestId('nav');
    expect(navbarElement).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
