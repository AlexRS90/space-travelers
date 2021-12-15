/* eslint-disable max-len */
import React, { } from 'react';
import { useSelector } from 'react-redux';
import MissionCardProfile from './MissionCardProfile';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <>
      {reservedMissions && reservedMissions.map((reserMisson) => <MissionCardProfile reserMisson={reserMisson} key={reserMisson.mission_id} />)}
    </>
  );
};

export default MyProfile;
