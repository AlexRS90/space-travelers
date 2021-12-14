import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission }) => (
  <>
    <tbody>
      <tr>
        <td className="mission-title">{mission.mission_name}</td>
        <td className="mission-desc">{mission.description}</td>
        <td className="join-mission">
          <span className="me-3 span-top">Active Member</span>
        </td>
        <td className="member-status">
          <span className="span-down">Join Mission</span>
        </td>
      </tr>
    </tbody>
  </>
);

MissionCard.propTypes = {
  mission: PropTypes.node.isRequired,
};

export default MissionCard;
