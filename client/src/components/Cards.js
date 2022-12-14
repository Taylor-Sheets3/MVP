import React from 'react';
import axios from 'axios';

function Cards ({ batch, handleDelete }) {
  const { id, product, date_made, case_size, units, tank, gallons, sanitation, qa, reviewed } = batch;

  return (
    <div className='Cards'>
      <div className='row1'>
        <div>Batch number: <b>{id}</b></div>
        <div><b>{product}</b> {case_size}</div>
      </div>
      <div className='row1'>
        <div>Date: {date_made.slice(0, 10)}</div>
        <div>Time: {date_made.slice(11, 16)}</div>
      </div>
      <div className='row1'>
        <div>Units: <b>{units}</b></div>
        <div>{tank}</div>
      </div>
      <div className='row2'>
        <div>Theoretical gallons: {gallons}</div>
        <div>Sanitation: {sanitation}</div>
      </div>
      <div className='row3'>
        <div className='qaRow'>Testing: <b>{qa ? 'Pass' : 'Fail'}</b></div>
        <button
      className='del-btn'
      type='button'
      onClick={() => handleDelete(id)}
    >Delete
    </button>
      </div>
    </div>
  )
}

export default Cards;