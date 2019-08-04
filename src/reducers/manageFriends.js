let initialState = { friend: "" };

export function manageFriends(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(
        friend => friend.id === action.id
      );
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1)
        ]
      };
    default:
      return state;
  }
}

    // In managePresents.js, 
    // write a function called managePresents 
    // that takes in an action and the previous 
    // state as its argument. Actions passed into 
    // this reducer only have a type attribute, so 
    // they would look something like this:



