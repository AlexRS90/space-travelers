import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

afterEach(() => {
  cleanup();
});

describe('render profile to the Dom', () => {
  test('render myprofile to the dom', async () => {
    render(<Provider store={store}><MyProfile /></Provider>);
    const myProfileElelement = await screen.findByTestId('profile-page');
    expect(myProfileElelement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><MyProfile /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
