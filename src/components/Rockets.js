import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket } from '../redux/rocket/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.rockets.rockets);
  useEffect(() => {
    dispatch(fetchRocket());
  }, []);
  return (
    <div>
      {rocket.map((cohete) => (
        <div key={cohete[0].id}>
          <h1>{cohete[0].name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
