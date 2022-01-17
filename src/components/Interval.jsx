import '../styles/Interval.css';

import React from 'react';
import Card from './Layout/Card';

export default props => {

  return (

    <Card title='Numbers Interval'>
      <div className="Interval">
        <span>
          <b>Minimum</b>
          <input type="number" value={0} />
        </span>
        <span>
          <b>Maximum</b>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>

  );

}