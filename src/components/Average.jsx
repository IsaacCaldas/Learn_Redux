import '../styles/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Layout/Card';

const Average = props => {
  
  const {min, max} = props

  return (

    <Card title='Numbers Average'
      color='#1B5605'
      colorContent='#35A30E' 
    >
      <div className="Average">
        <span>Result: <b>{(max + min) / 2}</b></span>
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

export default connect(mapStateToProps)(Average);