import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  
  numbers: function(state, action){

    switch(action.type){

      case 'NUM_MIN_CHANGED':
        return {
          ...state,
          min: action.payload
        }
        break;

      case 'NUM_MAX_CHANGED':
        return {
          ...state,
          max: action.payload
        }
        break;

      default:
        return {
          min: 1,
          max: 10
        }
    }
  },
  names: function(state, action){
    return [
      'Harry',
      'Hermione',
      'Rony'
    ]
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;