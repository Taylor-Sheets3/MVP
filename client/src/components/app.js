import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Batches from './Batches.js';

function App() {
  const [batches, setBatches] = useState([]);

  function fetch() {
    axios.get('/batches')
      .then((response) => setBatches(response.data))
      .catch((err) => console.log(err));
  }

  function handleDelete(id) {
    axios.delete(`/batches/${id}`)
      .then(() => fetch())
  }

  useEffect(() => {
    fetch();
  }, [])

  return (
    <div className='App'>
      <h1 className='title'>Beverage data</h1>
      {batches.length ? <Batches batches={batches} handleDelete={handleDelete}/> : 'NO BATCHES'}
    </div>
  )
}

export default App;
