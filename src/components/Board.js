import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../containers/CardList';
import AddCardList from '../containers/AddCardList';
import '../styles/Board.css';

const Board = ({ board }) => {
  return (
    <div className='board'>
      <div className='board-header'>
        <h1 className='board-header-title'>{board.name}</h1>
      </div>
      <div className='board-content'>
        {board.cardLists.map((id, index) => (
          <div className='cardlist-wrapper' key={index}>
            <CardList id={id} index={index} boardId={board.id} />
          </div>
        ))}
        <div className='cardlist-wrapper'>
          <AddCardList boardId={board.id} />
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    cardLists: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Board;
