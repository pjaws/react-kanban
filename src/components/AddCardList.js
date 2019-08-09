import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

const AddCardList = ({ addCardList, boardId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState('');
  const handleClick = () => setIsModalOpen(true);
  const handleReqClose = () => setIsModalOpen(false);
  const handleChange = e => {
    setListName(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsModalOpen(false);
    addCardList(listName, boardId);
  };
  return (
    <>
      <button className='add-cardlist-btn' onClick={() => handleClick()}>
        <i class='fas fa-plus' />
        &nbsp;
        <span className='btn-text'>Add a List</span>
      </button>
      <ReactModal isOpen={isModalOpen} onRequestClose={handleReqClose}>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type='text'
            className='input'
            onChange={e => handleChange(e)}
          />
          <button className='btn btn-success'>Create List</button>
        </form>
      </ReactModal>
    </>
  );
};

AddCardList.propTypes = {
  addCardList: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default AddCardList;
