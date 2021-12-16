import React from 'react';
import PropTypes from 'prop-types';

const MissionCardProfile = ({ reserMisson }) => (
  <tbody data-testid="profile-card">
    <tr>
      <td>{reserMisson.mission_name}</td>
    </tr>
  </tbody>
);

MissionCardProfile.propTypes = {
  reserMisson: PropTypes.node.isRequired,
};

export default MissionCardProfile;
