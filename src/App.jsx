import './App.css';

import React, { useState } from 'react';

import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import PrizeDraw from './components/PrizeDraw';

function App() {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1 className='title'>
        <span class="dot"></span> React-Redux <span class="dot"></span>
        <hr></hr>
      </h1>
      <div className='div-rows'>
        <div className='row'>
          <Interval
            min={min}
            max={max}
            onMinChanged={setMin}
            onMaxChanged={setMax}
          ></Interval>
        </div>
        <div className='row'>
          <Sum min={min} max={max}></Sum>
          <Average min={min} max={max}></Average>
          <PrizeDraw min={min} max={max}></PrizeDraw>
        </div>
      </div>
    </div>
  );
}

export default App;
