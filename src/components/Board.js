import React from 'react';
import CardList from '../containers/CardList';
import AddCardList from '../containers/AddCardList';
import '../styles/Board.css';

const Board = ({ board, cardLists }) => {
  return (
    <div className='board'>
      <div className='board-header'>
        <h1 className='board-header-title'>{board.name}</h1>
      </div>
      <div className='board-content'>
        {board.cardLists.map((id, index) => (
          <div className='cardlist-wrapper' key={index}>
            <CardList id={id} index={index} />
          </div>
        ))}
        <div className='cardlist-wrapper'>
          <AddCardList />
        </div>
      </div>
    </div>
  );
};

export default Board;
