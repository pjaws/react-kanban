import React from 'react';
import { Link } from 'react-router-dom';
import AddBoard from '../containers/AddBoard';
import '../styles/Home.css';

const Home = ({ boards }) => {
  return (
    <div className='Home'>
      <h1>Choose or create a board to get started!</h1>
      <ul className='boards-list'>
        {boards.allIds.map(boardId => (
          <li key={boardId} className='boards-list-item'>
            <Link to={`/boards/${boardId}`}>
              <div className='board-tile'>
                <div className='board-tile-title'>
                  {boards.byId[boardId].name}
                </div>
                <div className='board-tile-body' />
              </div>
            </Link>
          </li>
        ))}
        <li className='boards-list-item'>
          <AddBoard />
        </li>
      </ul>
    </div>
  );
};

export default Home;
