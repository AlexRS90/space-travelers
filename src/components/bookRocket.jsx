import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bookRocket } from '../redux/rocket/rocket';

const Button = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button className="book-rocket-btn" type="button" onClick={() => dispatch(bookRocket(id))}>Book Rocket</button>
  );
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Button;
