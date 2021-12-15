import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket } from '../redux/rocket/rocket';
import Button from './bookRocket';
import Cancel from './cancelRocket';
import './Rockets.css';
/*eslint-disable*/

const Rockets = () => {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(fetchRocket());
  }, []);
  return (
    <div className="container34">
      {rocket.map((cohete) => (
        <div key={cohete.id} className="wrapper">
          <img src={cohete.image} alt={`Rocket: ${cohete.name}`} width="300" />
          <div className="info-wrapper">
            <h2>{cohete.name}</h2>
            <p><span className={(cohete.reserved === true ? 'badge' : 'hidden')}>Reserved</span> {cohete.description}</p>
            <span className={(cohete.reserved === false ? 'visible' : 'hidden')}><Button id={cohete.id} /></span>
            <span className={(cohete.reserved === true ? 'visible' : 'hidden')}><Cancel id={cohete.id} /></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
