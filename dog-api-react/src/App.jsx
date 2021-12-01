import React from 'react';
import './App.css';
import { Fetch,Random, UseStateComponent,UseEffectComponent} from './components';

function App() {
  return (
    <div className="App">
        <h1>Dog Api</h1>
        <di className="container">
          <Fetch></Fetch>
          <Random></Random>
        </di>

{/*         <UseStateComponent></UseStateComponent>
        <UseEffectComponent></UseEffectComponent> */}
    </div>
  );
}

export default App;
