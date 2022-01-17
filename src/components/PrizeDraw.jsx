import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;

  return (

    <Card title='Numbers Prize Draw' 
      color='#220768'
      colorContent='#4016AC'  
    >
      <div className="Prize Draw">
        <span>Result: <b>{ random }</b></span>
      </div>
    </Card>

  );

}