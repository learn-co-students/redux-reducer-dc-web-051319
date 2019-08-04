let initialState = {friend: ""}

export function manageFriends(state=initialState, action){
    switch(action.type){
        case "ADD_FRIEND":
            console.log("Add friend", action.type)
            return {}
        case "REMOVE_FRIEND":
            console.log("Remove Friend", action.type)
        default: 
        return state 
    }
}

    // In managePresents.js, 
    // write a function called managePresents 
    // that takes in an action and the previous 
    // state as its argument. Actions passed into 
    // this reducer only have a type attribute, so 
    // they would look something like this:



