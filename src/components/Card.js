import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import '../styles/Card.css';

const Card = ({ card, cardListId, editCard, deleteCard }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardText, setCardText] = useState(card.text);
  const handleClick = () => setIsModalOpen(true);
  const handleReqClose = () => setIsModalOpen(false);
  const handleChange = event => {
    setCardText(event.target.value);
  };
  const handleEdit = event => {
    event.preventDefault();
    editCard(card.id, cardText.trim());
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    // TODO: cardListId should be stored on the card
    deleteCard(card.id, cardListId);
  };

  return (
    <>
      <div className='card' onClick={() => handleClick()}>
        {card.text}
      </div>
      <ReactModal isOpen={isModalOpen} onRequestClose={handleReqClose}>
        <form onSubmit={handleEdit}>
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
        <button className='btn btn-danger' onClick={() => handleDelete()}>
          Delete Card
        </button>
      </ReactModal>
    </>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  cardListId: PropTypes.string.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
