import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  return (

    <Card title='Numbers Sum'
      color='#710808'
      colorContent='#C81515' 
    >
      <div className="Sum">
        <span>Result: <b>10</b></span>
      </div>
    </Card>

  );

}