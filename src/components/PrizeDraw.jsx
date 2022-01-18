import '../styles/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Layout/Card';

const PrizeDraw = props => {

  const {min, max} = props
  const random = parseInt(Math.random() * (max - min) + min);

  return (

    <Card title='Numbers Prize Draw' 
      color='#220768'
      colorContent='#4016AC'  
    >
      <div className="Prize Draw">
        <span>Result: <b>{random}</b></span>
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

export default connect(mapStateToProps)(PrizeDraw);