import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  const { min, max } = props;

  return (

    <Card title='Numbers Interval'>
      <div className="Interval">
        <span>
          <b>Minimum</b>
          <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} />
        </span>
        <span>
          <b>Maximum</b>
          <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} />
        </span>
      </div>
    </Card>

  );

}