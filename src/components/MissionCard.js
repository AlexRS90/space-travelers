import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission, joinTheMission }) => (
  <>
    <tbody>
      <tr data-id={mission.mission_id}>
        <td className="mission-title">{mission.mission_name}</td>
        <td className="mission-desc">{mission.description}</td>
        <td className="join-mission">
          <button type="button" className="me-3 span-top">Active Member</button>
        </td>
        <td className="member-status">
          <button type="button" className="span-down" onClick={joinTheMission}>Join Mission</button>
        </td>
      </tr>
    </tbody>
  </>
);

MissionCard.propTypes = {
  mission: PropTypes.node.isRequired,
  joinTheMission: PropTypes.node.isRequired,
};

export default MissionCard;
