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
        <button type="button" className="me-3 span-top">{mission.reserved === true ? 'Active Member' : 'NOT A MEMBER'}</button>
      </td>
      <td className="member-status">
        <button type="button" className="span-down" onClick={mission.reserved === true ? leaveMission : joinTheMission}>{mission.reserved === true ? 'Leave mission' : 'Join Mission'}</button>
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
