import React from 'react';
import axios from 'axios';

function Cards ({ batch, handleDelete }) {
  const { id, product, date_made, case_size, units, tank, gallons, sanitation, qa, reviewed } = batch;

  return (
    <div className='Cards'>
     {id} | {product} | {date_made.slice(0, 10)} |  {date_made.slice(11, 16)} | {case_size} | {units} | {tank} | {gallons} | {sanitation} | {qa ? 'Pass' : 'Fail'}
     <button
      type='button'
      onClick={() => handleDelete(id)}
    >Delete
    </button>
    </div>
  )
}

export default Cards;