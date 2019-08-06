import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '../styles/Card.css';

const Card = ({ card, editCard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardText, setCardText] = useState(card.text);
  const handleClick = () => setIsModalOpen(true);
  const handleReqClose = () => setIsModalOpen(false);
  const handleChange = event => {
    setCardText(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    editCard(card.id, cardText.trim());
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='card' onClick={() => handleClick()}>
        {card.text}
      </div>
      <ReactModal isOpen={isModalOpen} onRequestClose={handleReqClose}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='input'
            onChange={e => handleChange(e)}
            value={cardText}
          />
          <button className='btn btn-success' type='submit'>
            Edit Card
          </button>
        </form>
      </ReactModal>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  editCard: PropTypes.func.isRequired,
};

export default Card;
