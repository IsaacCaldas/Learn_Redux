import '../styles/Interval.css';

import React from 'react';
import { connect } from 'react-redux';

import Card from './Layout/Card';
import { changeMinNum, changeMaxNum } from '../store/actions/numbers';

const Interval = props => {

  const {min, max} = props;
  
  props.changeMin(10);
  props.changeMax(50);

  return (

    <Card title='Numbers Interval'>
      <div className="Interval">
        <span>
          <b>Minimum</b>
          <input type="number" value={min} onChange={e => props.changeMin(e.target.value)} />
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

function mapActionCreatorsToProp(dispatch){
  return {
    changeMin(newNumber) {
      // Action Creator -> action
      const action = changeMinNum(newNumber);
      dispatch(action);
    },
    changeMax(newNumber) {
      // Action Creator -> action
      const action = changeMaxNum(newNumber);
      dispatch(action);
    }
  }
}

export default connect(
  mapStateToProps, 
  mapActionCreatorsToProp)(Interval);