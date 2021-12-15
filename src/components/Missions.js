/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCard from './MissionCard';
import { fetchMission, reserveMission, cancelMission } from '../redux/mission/mission';
import './Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);

  const joinTheMission = (e) => {
    const mission = e.target.parentNode.parentNode;
    const missionId = mission.getAttribute('data-id');
    dispatch(reserveMission(missionId));
  };

  const leaveMission = (e) => {
    const mission = e.target.parentNode.parentNode;
    const missionId = mission.getAttribute('data-id');
    dispatch(cancelMission(missionId));
  };

  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      {mission && mission.map((mission) => <MissionCard mission={mission} key={mission.mission_id} joinTheMission={joinTheMission} leaveMission={leaveMission} />)}
    </table>
  );
};

export default Mission;
