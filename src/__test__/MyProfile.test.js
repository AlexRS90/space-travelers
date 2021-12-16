import { render, screen, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import MyProfile from '../components/MyProfile';

afterEach(() => {
  cleanup();
});

describe('render to the Dom', async () => {
  test('render my profile page to the DOM', async () => {
    render(<MyProfile />);
    const myProfileElement = await screen.getByTestId('profile-page');
    expect(myProfileElement).toBeInTheDocument();
  });
});
