import React, {useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [batches, setBatches] = useState([]);
  
  return (
    <div>
      <Search />
      <Batches />
    </div>
  )
}

export default App;