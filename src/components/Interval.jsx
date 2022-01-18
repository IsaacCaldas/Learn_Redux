import '../styles/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Layout/Card';

const Interval = props => {

  const {min, max} = props;

  return (

    <Card title='Numbers Interval'>
      <div className="Interval">
        <span>
          <b>Minimum</b>
          <input type="number" value={min} />
        </span>
        <span>
          <b>Maximum</b>
          <input type="number" value={max} />
        </span>
      </div>
    </Card>

  );

}

function mapStateToProps(state){
  return {
    min: state.numbers.min,
    max: state.numbers.max
  }
}

export default connect(mapStateToProps)(Interval);