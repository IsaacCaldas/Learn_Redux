import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  const { min, max } = props;

  return (

    <Card title='Numbers Sum'
      color='#710808'
      colorContent='#C81515' 
    >
      <div className="Sum">
        <span>Result: <b>{ max + min }</b></span>
      </div>
    </Card>

  );

}