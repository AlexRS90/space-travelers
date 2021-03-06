import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cancelRocket } from '../redux/rocket/rocket';

const cancelButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button className="cancel-rocket-btn" type="button" onClick={() => dispatch(cancelRocket(id))}>Cancel Reservation</button>
  );
};

cancelButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default cancelButton;
