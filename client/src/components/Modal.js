import React, { useState } from 'react';
import axios from 'axios';

function Modal({ closeModal }) {
  const [flavor, setFlavor] = useState('cola');
  const [date, setDate] = useState('');
  const [cases, setCases] = useState('12oz');
  const [units, setUnits] = useState('');
  const [gallons, setGallons] = useState('');
  const [tank, setTank] = useState('tank 1');
  const [sanitation, setSanitation] = useState('rinse');
  const [qa, setQa] = useState(true);

  function handleFormSubmit() {
    const body = {
      flavor: flavor,
      date: date,
      cases: cases,
      units: units,
      gallons, gallons,
      tank: tank,
      sanitation: sanitation,
      qa: qa,
    }
    axios.post('/batches', body)
  }

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        Add a batch
        <div className='modal-close'>
          <button
            type='button'
            className='modal-btn'
            onClick={() => closeModal(false)}
          >close
          </button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit();
          closeModal(false)
        }}>
          <div className='flavor'>
            Select flavor:
            <select className='flavor-select' value={flavor} onChange={(e) => setFlavor(e.target.value)} required>
              <option value='Cola'>Cola</option>
              <option value='Dt_Cola'>Dt Cola</option>
              <option value='Zero_Cola'>Zero Cola</option>
              <option value='Dr_Type'>Dr Type</option>
              <option value='Mt_Type'>Mt Type</option>
              <option value='LLime'>Lemon Lime</option>
            </select>
          </div>
          <div className='date'>
            <label htmlFor='date'>Enter time batch was completed</label>
            <input
              name='date'
              type='datetime-local'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            >
            </input>
          </div>
          <div className='cases'>
            Select case size:
            <select className='case-select' value={cases} onChange={(e) => setCases(e.target.value)} required>
              <option value='12oz'>12oz</option>
              <option value='500mL'>500mL</option>
              <option value='1L'>1L</option>
              <option value='2L'>2L</option>
            </select>
          </div>
          <div className='units'>
            <input
              placeholder='units'
              type='number'
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              required
            >
            </input>
          </div>
          <div className='tank'>
            <select className='tank-select' value={tank} onChange={(e) => setTank(e.target.value)} required>
              <option value='tank 1'>tank 1</option>
              <option value='tank 2'>tank 2</option>
              <option value='tank 3'>tank 3</option>
              <option value='tank 4'>tank 4</option>
              <option value='tank 5'>tank 5</option>
              <option value='tank 6'>tank 6</option>

            </select>
          </div>
          <div className='gallons'>
            <input
              placeholder='gallons'
              type='number'
              value={gallons}
              onChange={(e) => setGallons(e.target.value)}
              required
            >
            </input>
          </div>
          <div className='sanitation'>
            Enter sanitation type:
            <select className='sanitation-select' value={sanitation} onChange={(e) => setSanitation(e.target.value)} required>
              <option value='rinse'>rinse</option>
              <option value='3-step'>3-step</option>
              <option value='5-step'>5-step</option>
            </select>
          </div>
          <div className='qa'>
            TOA
            <select className='qa-select' value={qa} onChange={(e) => setQa(e.target.value)} required>
              <option value={true}>Pass</option>
              <option value={false}>Fail</option>
            </select>
          </div>
          <button type='submit'>Add Batch +</button>
        </form>
      </div>
    </div>
  )
}

export default Modal;