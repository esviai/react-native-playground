const initialState = {
  articles: null,
}

export default(state = initialState, action) => {
  switch (action.type) {
    case "BAD_NEWS":
      return {...state, articles: action.payload}
    default:
      return {...state}
  }
}
