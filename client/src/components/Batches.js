import React, { useState } from 'react';
import Cards from './Cards.js';
import Modal from './Modal.js';

function Batches ({ batches, handleDelete }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='Batches'>
      <button
        type='button'
        onClick={() => {
          setOpenModal(true);
        }}
      >Add Batch +
      </button>
      {openModal ? <Modal
        closeModal={setOpenModal}
      /> : ''}
      {batches.map((batch, i) => {
        return <Cards batch={batch} key={i} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default Batches;