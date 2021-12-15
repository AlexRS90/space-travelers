/* eslint-disable max-len */
import React, { } from 'react';
import { useSelector } from 'react-redux';
import MissionCardProfile from './MissionCardProfile';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="table-wrapper">
      <table className="table table-striped mission-section">
        <thead>
          <tr>
            <th>Mission</th>
          </tr>
        </thead>
        {reservedMissions && reservedMissions.map((reserMisson) => <MissionCardProfile reserMisson={reserMisson} key={reserMisson.mission_id} />)}
      </table>
    </div>
  );
};

export default MyProfile;
