const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {
        ...state,
        date: {
          ...state.date,
          ...action.payload
        }
      }
    case 'UPDATE_COUNTRIES':
      return {
        ...state,
        countries: action.payload
      }
    default:
      return state;
  }
}

export default appReducer