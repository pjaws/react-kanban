import React, { useState } from 'react';
import ReactModal from 'react-modal';
import '../styles/AddBoard.css';

const AddBoard = ({ addBoard }) => {
  const [input, setInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => setIsModalOpen(true);
  const handleChange = event => {
    setInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addBoard(input);
    setIsModalOpen(false);
  };

  return (
    <>
      <button className='AddBoard' onClick={() => handleClick()}>
        Create new board
      </button>
      <ReactModal isOpen={isModalOpen} contentLabel='Create a Board'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
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

export default AddBoard;
