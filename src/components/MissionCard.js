import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission }) => (
  <>
    <tbody>
      <tr>
        <td>{mission.mission_name}</td>
        <td className="mission-desc">{mission.description}</td>
        <td className="mission-action">
          <span className="me-3">Active Member</span>
          <span>Join Mission</span>
        </td>
      </tr>
    </tbody>
  </>
);

MissionCard.propTypes = {
  mission: PropTypes.node.isRequired,
};

export default MissionCard;
