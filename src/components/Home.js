import React from 'react';
import { Link } from 'react-router-dom';
import AddBoard from '../containers/AddBoard';

const Home = ({ boards }) => {
  return (
    <div className='Home'>
      <h1>Choose or create a board to get started!</h1>
      <div className='boards-list'>
        <ul>
          {boards.allIds.map(boardId => (
            <li key={boardId}>
              <Link to={`/boards/${boardId}`}>
                <div className='board-preview'>
                  <div className='board-preview-title'>
                    {boards[boardId].title}
                  </div>
                  <div className='board-preview-body' />
                </div>
              </Link>
            </li>
          ))}
          <li>
            <AddBoard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
