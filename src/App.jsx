import logo from './logo.svg';
import './App.css';

import Card from './components/Layout/Card';
import Interval from './components/Interval';

function App() {
  return (
    <div className="App">
      <h1 className='title'>
        <span class="dot"></span> React-Redux <span class="dot"></span>
        <hr></hr>
      </h1>
      <div className='div-rows'>
        <div className='row'>
          <Interval 
          >
          </Interval>
        </div>
        <div className='row'>
          <Card 
              title='Card #2'
              color='#f27d0c'
              colorContent='#111'
          >
            W
          </Card>
          <Card 
            title='Card #3'
            color='#222233'
          >
            Y
          </Card>
          <Card 
            title='Card #3'
            color='#8A084B'
          >
            Z
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
