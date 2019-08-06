import React from 'react';
import PropTypes from 'prop-types';
import Card from '../containers/Card';
import AddCard from '../containers/AddCard';
import '../styles/CardList.css';

const CardList = ({ cardList }) => {
  return (
    <div className='cardlist'>
      <div className='cardlist-header'>
        <h2 className='cardlist-title'>{cardList.name}</h2>
      </div>
      <div className='cardlist-cards'>
        {cardList.cards.map((id, index) => (
          <Card key={index} index={index} id={id} />
        ))}
      </div>
      <div className='cardlist-footer'>
        <AddCard cardListId={cardList.id} />
      </div>
    </div>
  );
};

CardList.propTypes = {
  cardList: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CardList;
