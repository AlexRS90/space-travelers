/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission, joinTheMission, leaveMission }) => (
  <tbody>
    <tr data-id={mission.mission_id}>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-desc">{mission.description}</td>
      <td className="join-mission">
        <span className="me-3 span-top" style={mission.reserved === true ? { backgroundColor: '#0033FF' } : { backgroundColor: '#282828' }}>{mission.reserved === true ? 'Active Member' : 'NOT A MEMBER'}</span>
      </td>
      <td className="member-status">
        <button type="button" className="span-down" style={mission.reserved === true ? { backgroundColor: '#F8F8F8', color: 'red', border: '2px solid red' } : { backgroundColor: '#F8F8F8', color: 'black', border: '2px solid black' }} onClick={mission.reserved === true ? leaveMission : joinTheMission}>{mission.reserved === true ? 'Leave mission' : 'Join Mission'}</button>
      </td>
    </tr>
  </tbody>
);

MissionCard.propTypes = {
  mission: PropTypes.object.isRequired,
  joinTheMission: PropTypes.func.isRequired,
  leaveMission: PropTypes.func.isRequired,
};

export default MissionCard;
