import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  return (

    <Card title='Numbers Prize Draw' 
      color='#220768'
      colorContent='#4016AC'  
    >
      <div className="Prize Draw">
        <span>Result: <b>3</b></span>
      </div>
    </Card>

  );

}