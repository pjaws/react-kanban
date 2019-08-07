import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddBoard from '../containers/AddBoard';
import '../styles/Home.css';

const Home = ({ boards }) => {
  return (
    <div className='Home'>
      <h1>Choose or create a board to get started!</h1>
      <ul className='boards-list'>
        {boards.allIds.map(boardId => (
          <li key={boardId} className='boards-list-item'>
            <Link to={`/boards/${boardId}`} className='board-link'>
              <div className='board-tile'>
                <div className='board-tile-title'>
                  {boards.byId[boardId].name}
                </div>
                <div className='board-tile-body' />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className='add-board-wrapper'>
        <AddBoard />
      </div>
    </div>
  );
};

Home.propTypes = {
  boards: PropTypes.shape({
    byId: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      cardLists: PropTypes.arrayOf(PropTypes.string),
    }),
    allIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Home;
