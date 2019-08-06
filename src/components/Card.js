import React from 'react';
import '../styles/Card.css';

const Card = ({ card }) => {
  return <div className='card'>{card.text}</div>;
};

export default Card;
