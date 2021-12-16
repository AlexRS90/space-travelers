import { render, screen, cleanup } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

afterEach(() => {
  cleanup();
});

describe('render the component to the DOM', () => {
  test('render rockets component', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    const rocketElement = await screen.findByTestId('testing');
    expect(rocketElement).toBeInTheDocument();
  });
});
