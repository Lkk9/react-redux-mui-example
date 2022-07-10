const devideNumber = (state=2, action) => {
  switch (action.type) {
    case 'INC_DEVIDE_NUMBER':
      return (()=>{
        const nextNumber = state + action.payload
        return nextNumber > 9 ? state : nextNumber
      })()
    case 'DEC_DEVIDE_NUMBER':
      return (()=>{
        const nextNumber = state - action.payload
        return nextNumber < 2 ? state : nextNumber
      })()
    default:
      return state
  }
}

export default devideNumber
