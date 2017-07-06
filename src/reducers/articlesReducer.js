const initialState = {
  articles: [],
}

export default (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "BAD_NEWS":
      return {...state, articles: action.payload}
    default:
      return {...state}
  }
}
