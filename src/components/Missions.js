/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCard from './MissionCard';
import { fetchMission } from '../redux/mission/mission';

const Mission = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.missions);
  console.log('Components mission', mission);

  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  return <MissionCard />;
};

export default Mission;
