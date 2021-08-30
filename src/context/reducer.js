export const reducer = (state, action) => {
  console.log("state in reducr", state);
  if (action.type === "DELETE_TRANSACTION") {
    //console.log(action.payload);
    return [...state.filter((obj, ind) => obj.title !== action.payload)];
  } else if (action.type === "ADD_TRANSACTION") {
    console.log(action.payload);
    return [...state, action.payload];
  }
};
