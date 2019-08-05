import React from 'react';
import Card from '../containers/Card';
import AddCard from '../containers/AddCard';

const CardList = ({ cardList, cards }) => {
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
        <AddCard />
      </div>
    </div>
  );
};

export default CardList;
