const initialState = {
  min: 1,
  max: 10
}

export default function(state = initialState, action){

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
      return state;
  }
}