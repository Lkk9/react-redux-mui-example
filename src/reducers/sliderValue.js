const sliderValue = (state=50, action) => {
  switch (action.type) {
    case 'SET_SLIDER_VALUE':
      return action.payload
    case 'DEVIDE_SLIDER_VALUE':
      return ~~(state / action.payload)
    default:
      return state
  }
}

export default sliderValue
