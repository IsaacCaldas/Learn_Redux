import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  return (

    <Card title='Numbers Average'
      color='#1B5605'
      colorContent='#35A30E' 
    >
      <div className="Average">
        <span>Result: <b>5</b></span>
      </div>
    </Card>

  );

}