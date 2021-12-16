import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Mission from '../components/Missions';

afterEach(() => {
  cleanup();
});

describe('render mission to the DOM', () => {
  test('render mission component to the screen', async () => {
    render(<Provider store={store}><Mission /></Provider>);
    const missionElement = await screen.findByTestId('missions');
    expect(missionElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Mission /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
