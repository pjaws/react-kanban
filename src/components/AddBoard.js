import React, { useState } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import '../styles/AddBoard.css';

const AddBoard = ({ addBoard }) => {
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => setIsModalOpen(true);
  const handleChange = event => {
    setInput(event.target.value);
  };
  const handleReqClose = () => setIsModalOpen(false);
  const handleSubmit = event => {
    event.preventDefault();
    addBoard(input);
    setIsModalOpen(false);
  };

  return (
    <>
      <button className='btn btn-primary' onClick={() => handleClick()}>
        Create new board
      </button>
      <ReactModal
        isOpen={isModalOpen}
        contentLabel='Create a Board'
        onRequestClose={handleReqClose}
        className='add-board-modal'
        overlayClassName='add-board-overlay'
      >
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='input'
            placeholder='Enter a board name'
            onChange={e => handleChange(e)}
          />
          <button type='submit' className='btn btn-success'>
            Create Board
          </button>
        </form>
      </ReactModal>
    </>
  );
};

AddBoard.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default AddBoard;
