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
    default:
      return state;
  }
}

export default appReducer