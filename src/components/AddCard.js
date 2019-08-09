import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCard = ({ addCard, cardListId }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [cardText, setCardText] = useState('');
  const handleClick = () => {
    setIsAdding(true);
  };
  const handleChange = event => {
    setCardText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addCard(cardText.trim(), cardListId);
    setIsAdding(false);
  };
  return (
    <div className='add-card'>
      {!isAdding && (
        <button className='add-card-btn' onClick={() => handleClick()}>
          <i className='fas fa-plus' />
          &nbsp;
          <span className='btn-text'>Add a Card</span>
        </button>
      )}
      {isAdding && (
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type='text'
            className='add-card-input'
            onChange={e => handleChange(e)}
          />
          <button type='submit' className='btn btn-success'>
            Create Card
          </button>
        </form>
      )}
    </div>
  );
};

AddCard.propTypes = {
  addCard: PropTypes.func.isRequired,
  cardListId: PropTypes.string.isRequired,
};

export default AddCard;
