
// Action Creator
export function changeMinNum(newNumber){
  return {
    type: 'NUM_MIN_CHANGED',
    payload: newNumber
  }
}

export function changeMaxNum(newNumber){
  return {
    type: 'NUM_MAX_CHANGED',
    payload: newNumber
  }
}