import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissionCardProfile from '../components/MissionCardProfile';

afterEach(() => {
  cleanup();
});

const missions = [
  {
    mission_name: 'Thaicom',
    mission_id: 'EFDRT',
    reserved: true,
  },
  {
    mission_name: 'Thaicom',
    mission_id: 'HJUIY',
    reserved: false,
  },
  {
    mission_name: 'Falcon',
    mission_id: 'EFWERT',
    reserved: true,
  },
];
const reserMisson = missions.filter((mission) => mission.reserved === true);

describe('render component to the screen', async () => {
  test('render mission card to the screen', async () => {
    render(<MissionCardProfile reserMisson={reserMisson} />);
    const missionCardElement = await screen.getByTestId('profile-card');
    expect(missionCardElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<MissionCardProfile reserMisson={reserMisson} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
