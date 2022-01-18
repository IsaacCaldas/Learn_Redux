import '../styles/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Layout/Card';

const Sum = props => {

  const {min, max} = props

  return (

    <Card title='Numbers Sum'
      color='#710808'
      colorContent='#C81515' 
    >
      <div className="Sum">
        <span>Result: <b>{min + max}</b></span>
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

export default connect(mapStateToProps)(Sum);