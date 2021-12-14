/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMission } from '../redux/mission/mission';

const Mission = () => {
  const dispatch = useDispatch();
  const mission = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  console.log(mission);
  return <p>This is missions section</p>;
};

export default Mission;
