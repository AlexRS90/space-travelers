/* eslint-disable max-len */
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MissionCard from '../components/MissionCard';

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

const joinTheMission = async () => {

};

const leaveMission = async () => {

};

describe('render the component to the dom', () => {
  test('Render mission card to the DOM', async () => {
    render(<MissionCard mission={missions} onClick={missions.reserved === true ? leaveMission : joinTheMission} />);
    const missionCardElement = await screen.getByTestId('mission-card');
    expect(missionCardElement).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const tree = renderer.create(<MissionCard mission={missions} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
