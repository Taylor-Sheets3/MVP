import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [batches, setBatches] = useState([]);

  function fetch() {
    axios.get('/batching')
      .then((response) => setBatches(response.data))
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Search />
      <Batches />
    </div>
  )
}

export default App;