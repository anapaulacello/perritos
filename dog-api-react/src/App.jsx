import React from 'react';
import './App.css';
import { Fetch,Random} from './components';

function App() {
  return (
    <div className="App">
        <h1>Dog Api</h1>
        <Fetch></Fetch>
        <Random></Random>
    </div>
  );
}

export default App;
