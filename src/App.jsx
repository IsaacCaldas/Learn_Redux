import './App.css';

import React from 'react';

import Interval from './components/Interval';
import Sum from './components/Sum';
import Average from './components/Average';
import PrizeDraw from './components/PrizeDraw';

function App() {

  return (
    <div className="App">
      <h1 className='title'>
        <span class="dot"></span> React-Redux <span class="dot"></span>
        <hr></hr>
      </h1>
      <div className='div-rows'>
        <div className='row'>
          <Interval></Interval>
        </div>
        <div className='row'>
          <Sum></Sum>
          <Average></Average>
          <PrizeDraw></PrizeDraw>
        </div>
      </div>
    </div>
  );
}

export default App;
