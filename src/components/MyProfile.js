/* eslint-disable max-len */
import React, { } from 'react';
import { useSelector } from 'react-redux';
import MissionCardProfile from './MissionCardProfile';
import CancelBtn from './cancelRocket';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((book) => book.reserved === true);
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
      <div className="rockets-wrapper">
        <h2>My Rockets</h2>
        <div className="gap">
          {reservedRockets.map((reservedRocket) => (
            <div className="info-rocket" key={reservedRocket.id}>
              <h3>{reservedRocket.name}</h3>
              <a href={reservedRocket.wiki} target="_blank" rel="noreferrer">More Info...</a>
              <CancelBtn id={reservedRocket.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
