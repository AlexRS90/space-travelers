/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCard from './MissionCard';
import { fetchMission } from '../redux/mission/mission';
import './Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  return (
    <>
      <div className="mission-header">
        <h1>Mission</h1>
        <h1>Description</h1>
        <h1>Status</h1>
      </div>
      {mission && mission.map((mission) => <MissionCard mission={mission} key={mission.mission_id} />)}
    </>
  );
};

export default Mission;
