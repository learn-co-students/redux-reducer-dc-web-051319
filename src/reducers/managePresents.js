

let initialState = {
    numberOfPresents:0
  }

export function managePresents(state=initialState, action) {
    // console.log(state, action)
  switch (action.type) {
    case "INCREASE":
        // console.log("numberOfPresents", action.type);
        return {numberOfPresents: state.numberOfPresents + 1}   
    default:
      return state;
  }
}


