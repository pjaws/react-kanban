import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ card }) => {
  return <div className='card'>{card.text}</div>;
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
